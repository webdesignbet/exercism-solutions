<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        $trimmed = trim($name);
        return $trimmed[0];
    }

    public function initial(string $name): string
    {
        $first = strtoupper($this->firstLetter($name));
        return $first . '.';
    }

    public function initials(string $name): string
    {
        $parts = explode(' ', trim($name));
        $first = $this->initial($parts[0]);
        $last = $this->initial($parts[1]);
        return $first . ' ' . $last;
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $initials_a = $this->initials($sweetheart_a);
        $initials_b = $this->initials($sweetheart_b);
        $pair_text = $initials_a . '  +  ' . $initials_b;
        return <<<HEART
     ******       ******
   **      **   **      **
 **         ** **         **
**            *            **
**                         **
**     {$pair_text}     **
 **                       **
   **                   **
     **               **
       **           **
         **       **
           **   **
             ***
              *
HEART;
    }
}
