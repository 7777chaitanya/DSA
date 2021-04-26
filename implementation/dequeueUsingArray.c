#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define N 5
int dequeue[N];

int front = -1;
int rear = -1;

void enqueueFront(){
    if((rear==N-1 && front==0) || front==rear+1)
        printf("The dequeue is full\n");
    else{
        int value;
        printf("Enter the value to insert into the dequeue : ");
        scanf("%d",&value);
        printf("\n");
        if(front==-1 && rear==-1){
            front= rear = 0;
            dequeue[front] = value;
        }
        else if(front==0){
            front = N-1;
            dequeue[front]  = value;
        }
        else{
            front--;
            dequeue[front] = value;
        } 
    }
}

void enqueueRear(){
    if((rear==N-1 && front==0) || front==rear+1)
        printf("The dequeue is full\n");
    else{
        printf("Enter the value to insert : ");
        int value;
        scanf("%d",&value);
        printf("\n");
        if(rear==-1 && front==-1){
            front = 0;
            rear = 0;
            dequeue[rear] = value;
        }
        else if(rear==N-1){
            rear==0;
            dequeue[rear] = value;
        }

        else{
            rear++;
            dequeue[rear] = value;
        }
    }
}

void dequeueFront(){
    if(rear==-1 && front==-1)
        printf("The dequeue is empty\n");
    else{
        if(front==N-1){
            front=0;
        }
        else if(front == rear){
            front=rear=-1;
        }
        else{
            front++;
        }
    }
}

void dequeueRear(){
    if(rear==-1 && front==-1)
        printf("The dequeue is empty\n");
    else{
        if(rear == 0){
            rear=N-1;
        }
        else if(front == rear){
            front=rear=-1;
        }
        else if(front == rear){
            front = rear = -1;
        }
        else
            rear--;
    }
}

void getFront(){
    if(rear==-1 && front==-1)
        printf("The dequeue is empty\n");
    else
        printf("The element in the front of the DEQ is : %d\n",dequeue[front]);
}

void getRear(){
    if(rear==-1 && front==-1)
        printf("The dequeue is empty\n");
    else
        printf("The element in the front of the DEQ is : %d\n",dequeue[rear]);
}

void isEmpty(){
    if(rear==-1 && front==-1)
        printf("true\n");
    else
        printf("false\n");
}

void isFull(){
    if((rear==N-1 && front==0) || front==rear+1)
        printf("true\n");
    else
        printf("false\n");
}

void display(){
    if(rear==-1 && front==-1){
        printf("The dequeue is empty\n");
    }
    else{
        int temp = front;
        while(temp != rear){
            printf("%d -> ",dequeue[temp]);
            temp = (temp+1)%N;
        }
        printf("%d\n",dequeue[rear]);
    }
}


void main(){
    while(1){
        printf("Choose any of the following options...\n");
        printf("1) enqueue at front\n");
        printf("2) enequeue from rear\n");
        printf("3) dequeue from front\n");
        printf("4) dequeue from rear\n");
        printf("5) get Front\n");
        printf("6) get rear\n");
        printf("7) is Empty\n");
        printf("8) is Full\n");
        printf("9) display\n");
        printf("10) Terminate the program\n");
        int choice;
        printf("Enter here : ");
        scanf("%d",&choice);
        printf("\n");

        switch(choice){
            case 1:
                enqueueFront();
                break;
            case 2:
                enqueueRear();
                break;
            case 3:
                dequeueFront();
                break;
            case 4: 
                dequeueRear();
                break;
            case 5:
                getFront();
                break;
            case 6:
                getRear();
                break;
            case 7:
                isEmpty();
                break;
            case 8:
                isFull();
                break;
            case 9:
                display();
                break;
            case 10:
                break;
            default:
                printf("Invalid option\n");
        }
        if(choice==10){
            printf("Program terminated\n");
            break;
        }
    }
}