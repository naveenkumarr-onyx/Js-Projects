import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int length = Integer.parseInt(scanner.nextLine());
        String input = scanner.nextLine();
        String[] values = input.split(",");
        int[] array = new int[length];
        for (int i = 0; i < array.length; i++) {
            array[i] = Integer.parseInt(values[i].trim());
        }
        for (int i = 0; i < array.length - 1; i++) {
            for (int j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        scanner.close();
        System.out.println(calc(array));;
    }

    private static int calc(int[] array) {
        if(array[0]+array.length-1 == array[array.length-1]){
            return 1;
        }else {
            return 0;
        }
    }

}