class demo{

    static void print_arr(int arr[]){
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }


    public static void bubble_sort(int arr[]){
        int n=arr.length;  //lemgth of an array
        //turns
        for(int i=0;i<n-1;i++){
            for(int j=0;j<n-1-i;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }

    }

    public static void selection_sort(int arr[]){
        for(int i=0;i<arr.length;i++){
            int maxPos=i;
            for(int j=i+1;j<arr.length;j++){
                if(arr[maxPos]>arr[j]){
                    maxPos=j;
                }
            }
            int temp=arr[i];
            arr[i]=arr[maxPos];
            arr[maxPos]=temp;
        }
    }

    public static void insertion_sort(int arr[]){
        for(int i=1;i<arr.length;i++){
            int curr=arr[i];
            int prev=i-1;
            while (prev>=0 && arr[prev]>curr) {
                arr[prev+1]=arr[prev];
                prev--;
            }
            arr[prev+1]=curr;
        }
    }

    public static void count_sort(int arr[]){
        int largest=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            largest=Math.max(largest, arr[i]);
        }

        int count[]=new int[largest+1];
        for(int i=0;i<arr.length;i++){
            count[arr[i]]++;
        }
        int j=0;
        for(int i=0;i<count.length;i++){
            while(count[i]>0){
                arr[j]=i;
                j++;
                count[i]--;
            }
        }
    }
    public static void main(String[] args){
        int array[]={5,1,2,6,1,5};
        // bubble_sort(array);
        // selection_sort(array);
        // insertion_sort(array);
        count_sort(array);
        print_arr(array);

    }
}