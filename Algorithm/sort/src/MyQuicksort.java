import java.util.Arrays;

public class MyQuicksort {

    /**
     * 划分
     * @param arr
     * @param left
     * @param right
     * @return
     */
    public static int quicksortL2(int[] arr, int left, int right){
        int x = arr[left];
        while(left < right){
            while (right > left && arr[right] >= x){
                right--;
            }
            if(right > left){
                arr[left] = arr[right];
                left ++ ;
            }

            while (left < right && arr[left] <= x){
                left ++;
            }
            if(left < right){
                arr[right] = arr[left];
                right --;
            }
        }

        arr[left] = x;
        return left;
    }

    /**
     * 递归划分子序列
     * @param arr
     * @param left
     * @param right
     */
    public static void quicksortL1(int[] arr, int left, int right){
        if(left < right){
            int markPosition = quicksortL2(arr, left, right);
            quicksortL1(arr, markPosition + 1, right);
            quicksortL1(arr, left,markPosition - 1);
        }
    }

    public static void sort(int[] arr){
        if(arr == null || arr.length == 0){
            return;
        }

        quicksortL1(arr, 0, arr.length - 1);
    }

    public static void main(String[] args) {
        int[] arr = {5, 9, 3, 8, 6, 4, 12, 11};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
