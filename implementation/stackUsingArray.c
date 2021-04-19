#include <stdio.h>
#include <stdlib.h>

#define N 5
int top = -1;
int stack[N];

int push()
{
    if (top == N-1)
        printf("The stack is full\n\n");
    else
    {
        int value;
        top++;
        printf("Enter the value : ");
        scanf("%d", &value);
        stack[top] = value;
    }
}

void pop()
{
    if(top == 1)
        printf("Stack Underflow");
    else
        top--;
}

void peek()
{
    if(top == -1)
        printf("The stack is empty");
    else
        printf("The value at the top of the stack is : %d\n\n",stack[top]);
}

void isEmpty()
{
    if(top == -1)
        printf("true\n\n");
    else
        printf("false\n\n");

}

void isFull()
{
    if(top == N-1)
        printf("true\n\n");
    else
        printf("false\n\n");
}

void displayBottomToTop(){
    if(top == -1)
        printf("There are no values in the Stack. Stack is empty");
    else{
    for(int i=0;i<top;i++)
        printf("%d -> ",stack[i]);
    printf("%d\n\n",stack[top]);
    }
}

void main()
{
    while (1)
    {
        printf("Choose any of the following option\n");
        printf("1) push\n");
        printf("2) pop\n");
        printf("3) peek\n");
        printf("4) isEmpty\n");
        printf("5) isFull\n");
        printf("6) Print the stack from bottom to top\n");
        printf("7) Termiante the program\n\n");

        int option = 0;
        printf("Enter here : ");
        scanf("%d", &option);
        switch (option)
        {
        case 1:
            push(stack);
            break;
        case 2:
            pop();
            break;
        case 3:
            peek();
            break;
        case 4:
            isEmpty();
            break;
        case 5:
            isFull();
            break;
        case 6:
            displayBottomToTop();
            break;
        case 7:
            break;
        default:
            printf("Invalid Option\n");
            break;
        }
        if (option == 7)
            break;
    }
    printf("Program Terminated!!");
}