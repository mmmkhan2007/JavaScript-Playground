/*

Swapping Two by Two
Write a function that swaps the first pair (1st and 2nd characters) with the second pair (3rd and 4th characters) for every quadruplet substring.

Examples
swapTwo("ABCDEFGH") ➞ "CDABGHEF"

swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"

swapTwo("munchkins") ➞ "ncmuinhks"

swapTwo("FFGGHHI") ➞ "GGFFHHI"

Notes
Keep leftover strings in the same order.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


import java.util.Arrays;
import java.util.stream.Collectors;
public class Challenge {
    public static String swapTwo(String str) {
        return Arrays.stream(str.split("(?<=\\G.{4})"))
            .map(s - > s.replaceAll("(..)(..)", "$2$1"))
            .collect(Collectors.joining());
    }
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


public class Challenge {
    public static String swapTwo(String s) {
        String r = "";
        if (s.length() < 4) return s;
        for (int i = 0, in = 0; i < s.length() / 4; i++, in += 4) {
            r += s.substring( in +2, in +4) + s.substring( in , in +2);
        }
        return r + s.substring(s.length() - s.length() % 4);
    }
}




//#############################################################
//#  SOLUTION 3
//#############################################################


public class Challenge {
    public static String swapTwo(String str) {
        String result = "";
        int i = 0;
        while (i < str.length()) {
            if (i + 3 < str.length()) {
                result += str.charAt(i + 2);
                result += str.charAt(i + 3);
                result += str.charAt(i);
                result += str.charAt(i + 1);
                i += 4;
            } else {
                result += str.charAt(i);
                i++;
            }
        }
        return result;
    }
}