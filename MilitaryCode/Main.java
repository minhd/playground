import javax.swing.*;
import java.awt.*;
import java.awt.event.*;


public class Main extends JPanel{
	public Main() {
		
	}

	public static void main(String[] args) {
		JFrame gui = new JFrame();
		gui.addWindowListener(new WindowAdapter(){
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
		gui.setSize(300,250);
		gui.setVisible(true);
	}
}