#include <stdio.h>
#include <stdlib.h>

#define N 5
int queue[N];
int front = -1;
int rear = -1;

void enqueue(){
    int value;
    printf("Enter the value that you want to insert : ");
    scanf("%d",&value);
    if((rear == N-1) || (front == N)){
        printf("The stack is full\n");
    }
    else if((front == -1) && (rear == -1)){
        front = rear = 0;
        queue[front] = value;
    }
    else{
        rear++;
        queue[rear] = value;
    }
}

void dequeue(){
    if(front == -1 || front == N){
        printf("The queue is empty. No elements to delete\n");
    }
    else{
        front++;
    }
}

void display(){
    if(((front==-1) && (rear==-1)) || (front == N)){
        printf("The stack is empty\n");
    }
    else{
        for(int i=front;i<rear;i++){
            printf("%d -> ",queue[i]);
        }
        printf("%d\n",queue[rear]);
    }
}

void isFull(){
    if(rear == N-1)
        printf("true\n");
    else
        printf("false\n");
}

void isEmpty(){
    if((front==-1 && rear==-1) || (front==N))
        printf("true\n");
    else
        printf("false\n");
}

void peek(){
    if((front==-1 && rear==-1) || (front == N)){
        printf("The stack is empty\n");
    }
    else{
        printf("The front element on the queue is %d",queue[front]);
    }
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