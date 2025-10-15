<?php

class ProgramWindow
{
    public $x;
    public $y;
    public $height;
    public $width;

    function __construct()
    {
        $this->x = 0;
        $this->y = 0;
        $this->width = 800;
        $this->height = 600;
    }

    function resize(Size $size)
    {
        $this->height = $size->height;
        $this->width = $size->width;
    }

    function move(Position $position)
    {
        $this->y = $position->y;
        $this->x = $position->x;
    }
}
