#include <stdio.h>
#include <stdlib.h>

struct node{
    int data;
    struct node * link;
};

struct node * front = 0;
struct node * rear = 0;

void enqueue(){
    struct node * newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the value to insert : ");
    scanf("%d",&newnode->data);
    if(front == 0 && rear == 0){
        front = rear = newnode;
        front->link = 0;
    }
    else{
        rear->link = newnode;
        rear = newnode;
    }
    rear->link = 0;
}

void dequeue(){
    if(front == 0){
        printf("The stack is empty\n");
    }
    else{
        struct node * temp = front;
        front = front->link;
        free(temp);
    }
    if(front == 0)
        rear=0;
}

void peek(){
    if(front == 0 && rear==0)
        printf("The stack is empty\n");
    else
        printf("The front value is : %d",front->data);
}

void display(){
    if(front==0 && rear==0)
        printf("The stack is empty\n");
    else{
        struct node * temp = front;
        while(temp->link!=0){
            printf("%d -> ",temp->data);
            temp=temp->link;
        }
        printf("%d\n",temp->data);
    }
}

void isEmpty(){
    if(front==0 && rear==0)
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
        printf("5) isEmpty\n");
        printf("6) Terminate program\n");
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
                isEmpty();
                break;
            case 6:
                break;
            default:
                printf("Please enter a valid option");
        }
        printf("\n");
        if(choice == 6){
            printf("Program successfully terminated!");
            break;
        }
    }
}


