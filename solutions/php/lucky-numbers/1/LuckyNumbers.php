<?php

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        $num1 = (int) implode('', $digitsOfNumber1);
        $num2 = (int) implode('', $digitsOfNumber2);

        return $num1 + $num2;
    }

    public function isPalindrome(int $number): bool
    {
        $str = (string) $number;
        return $str === strrev($str);
    }

    public function validate(string $input): string
    {
        if (trim($input) === '') {
            return 'Required field';
        }

        $num = (int) $input;

        if ($num <= 0) {
            return 'Must be a whole number larger than 0';
        }

        return '';
    }
}
