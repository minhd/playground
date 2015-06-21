import java.util.HashMap;
import javax.swing.JFrame;
import java.awt.*;

public class MilitaryCode {

	/**
	 * Main executable
	 * @param args[] list of names of args
	 */
	public static void main(String args[]) {

		for (String s:args) {
			System.out.println(transform(s));
		}
	}

	/**
	 * Primary function to return the military code of a name
	 * @param  s arg
	 * @return   military code, capitalised first, with space
	 */
	public static String transform(String s) {
		HashMap code = constructCodes();
		String ret = "";
		
		for (char ch: s.toLowerCase().toCharArray()) {
			String map = code.get(ch+"").toString();
			map = capitalizeFirst(map);
			map += " ";
			ret += map;
		}

		return ret;
	}

	/**
	 * return a hashmap lookup table for military code
	 * @return hashmap
	 */
	public static HashMap constructCodes() {
		HashMap<String, String> code = new HashMap<String, String>();
		code.put("a", "alpha");
		code.put("b", "bravo");
		code.put("c", "charlie");
		code.put("d", "delta");
		code.put("e", "echo");
		code.put("f", "foxtrot");
		code.put("g", "golf");
		code.put("h", "hotel");
		code.put("i", "india");
		code.put("k", "kilo");
		code.put("l", "lima");
		code.put("m", "mike");
		code.put("n", "november");
		code.put("o", "oscar");
		code.put("p", "papa");
		code.put("q", "quebec");
		code.put("r", "romeo");
		code.put("s", "sierra");
		code.put("t", "tango");
		code.put("u", "uniform");
		code.put("v", "victor");
		code.put("w", "whiskey");
		code.put("x", "x-ray");
		code.put("y", "yankee");
		code.put("z", "zulu");
		return code;
	}

	public static String capitalizeFirst(String input) {
		String output = input.substring(0, 1).toUpperCase() + input.substring(1);
		return output;
	}
}