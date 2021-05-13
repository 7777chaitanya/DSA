#include <stdio.h>
#include <stdlib.h>
#define N 5
int queue[N];
int front = -1;
int rear = -1;

void enqueue(){
    if(((rear+1)%N)==front)
        printf("The queue is full\n");
    else if(rear==-1 && front==-1){
        printf("Enter the value to insert : ");
        int val;
        scanf("%d",&val);
        rear = front =1;
        queue[rear] = val;
    }
    else{
        printf("Enter the value to insert : ");
        int val;
        scanf("%d",&val);
        rear = (rear+1)%N;
        queue[rear]=val;
    }
}

void dequeue(){
    if(front==-1 && rear==-1)
        printf("The queue is empty\n");
    else if(front==rear)
        front = rear = -1;
    else
        front = (front+1)%N; 
}

void peek(){
    if(front==-1 && rear==-1)
        printf("The queue is empty\n");
    else
        printf("The front element is : %d",queue[front]);
}

void display(){
    if(front==-1 && rear==-1)
        printf("The queue is empty\n");
    else{
        int temp = front;
        while(temp != rear){
            printf("%d -> ",queue[temp]);
            temp = (temp+1)%N;
        }
        printf("%d\n",queue[temp]);
    }
}

void isFull(){
    if(rear+1%N == front)
        printf("true\n");
    else
        printf("false\n");
}

void isEmpty(){
    if(front==-1 && rear==-1)
        printf("true\n");
    else
        printf("false\n");
}

void main(){
    int choice;
    while(1){
        printf("Choose any of the follwing options...\n");
        printf("1) enqueue\n");
        printf("2) dequeue\n");
        printf("3) peek\n");
        printf("4) display\n");
        printf("5) isFull\n");
        printf("6) isEmpty\n");
        printf("7) Terminate program\n");
        printf("Enter here : ");
        scanf("%d",&choice);
        printf("\n");
        switch(choice){
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
        if(choice == 7){
            printf("Program successfully terminated!");
            break;
        }

    }
}