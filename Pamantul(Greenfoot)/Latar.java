import greenfoot.*;  
public class Latar extends World
{

    
    public Latar()
    {    
        
        super(800, 550, 1, false);
        
        addObject(new Earth(),(int)(0.5*getWidth()),(int)(0.5*getHeight()));
        addObject(new Moon(),(int)(0.5*getWidth()+300),(int)(0.5*getHeight()));
    }
}
