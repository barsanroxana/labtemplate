import greenfoot.*; 


public class Moon extends Actor
{
    public static GreenfootImage mainimage;
    private int R=50,t=0;
    
    public void addedToWorld(World Later)
    {
        if(mainimage==null)
        {
          mainimage=getImage();  
        }
        updateGambar();
    }
    
    public void updateGambar()
    {
        GreenfootImage image=new GreenfootImage(2*R,2*R);
        image.setColor(Color.BLUE);
        //image.fillOval(0,0,image.getWidth()-1,image.getHeight()-1);
        for(int j=0;j<2*R;j++)
            for(int i=0;i<2*R;i++){
                double rx=i-0.5*image.getWidth();
                double ry=j-0.5*image.getHeight();
                double w=Math.sqrt(R*R-ry*ry);
                double r=Math.sqrt(rx*rx+ry*ry);
                if(r<R)
                {
                    double latitude=-ry*90.0/R;
                    double longitude=t+rx*90/w;
                    Color wrn=getColor(latitude, longitude);
                    image.setColorAt(i,j,wrn);
                };
                
            }
            
        setImage(image);
    }
    
    private double norm90(double a)
    {
        while(a<-90)
        {
            a+=180;
        }
        while(a>90)
        {
            a-=180;
        }
        return a;
    }
    
    private double norm180(double a)
    {
        while(a<-180)
        {
            a+=360;
        }
        while(a>180)
        {
            a-=360;
        }
        return a;
    }
    
    public Color getColor(double latitude, double longitude)
    {
       if(mainimage==null)return new Color(0,0,0,0);
       latitude=norm90(latitude);
       longitude=norm180(longitude);
       
       int px=(int)((longitude+180)*mainimage.getWidth()/360);
       int py=(int)(Math.abs(latitude-90)*mainimage.getHeight()/180);
       if(px>=0 && py>0 && px<mainimage.getWidth() && py<mainimage.getHeight())
       {
           return mainimage.getColorAt(px,py);
        }
        return new Color(0,0,0,0);
    }
    
    public void act() 
    {
        updateGambar();
        t++;
        if(t>180)t=(int)norm180(t);
    }    
}

