#include <stdio.h>
#include <stdlib.h>

#define N 5

int stack1[N];
int top1 = -1;
int stack2[N];
int top2 = -1;

void enqueue()
{
    if(top1 == N - 1)
    {
        printf("The queue is full\n");
    }
    else
    {
        printf("Enter the value that you want to insert : ");
        int val;
        scanf("%d", &val);
        printf("\n");
        top1++;
        stack1[top1] = val;
    }
}

void dequeue()
{
    int temp = top1;
    for(int i = 0; i <= temp; i++)
    {
        top2++;
        stack2[top2] = stack1[top1];
        top1--;
    }
    top2--;
    temp = top2;
    for(int i = 0; i <= temp; i++)
    {
        top1++;
        stack1[top1] = stack2[top2];
        top2--;
    }
}

void peek()
{
    if(top1==-1)
        printf("The queue is empty \n");
    else
        printf("The element in the front of the queue is : %d", stack1[0]);
}

void display()
{
    if(top1 == -1)
        printf("The queue is empty \n");
    else
    {
        for(int i = 0; i < top1; i++)
        {
            printf("%d -> ", stack1[i]);
        }
        printf("%d\n", stack1[top1]);
    }
}

void isFull()
{
    if(top1 == N - 1)
        printf("true\n");
    else
        printf("false\n");
}

void isEmpty()
{
    if(top1 == -1)
        printf("true\n");
    else
        printf("false\n");
}

void main()
{
    int choice;
    while (1)
    {
        printf("Choose any of the follwing options...\n");
        printf("1) enqueue\n");
        printf("2) dequeue\n");
        printf("3) peek\n");
        printf("4) display\n");
        printf("5) isFull\n");
        printf("6) isEmpty\n");
        printf("7) Terminate program\n");
        printf("Enter here : ");
        scanf("%d", &choice);
        printf("\n");
        switch (choice)
        {
        case 1:
            enqueue();
            break;
        case 2:
            dequeue();
            break;
        case 3:
            peek();
            break;
        case 4:
            display();
            break;
        case 5:
            isFull();
            break;
        case 6:
            isEmpty();
            break;
        case 7:
            break;
        default:
            printf("Please enter a valid option");
        }
        printf("\n");
        if (choice == 7)
        {
            printf("Program successfully terminated!");
            break;
        }
    }
}
