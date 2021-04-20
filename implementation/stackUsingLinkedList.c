#include <stdio.h>
#include <stdlib.h>

struct node{
    int data;
    struct node * link;
};

struct node * top = 0;

void push(){
    struct node * newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the value to push : ");
    scanf("%d",&newnode->data);
    newnode->link = top;
    top = newnode;
}

void pop(){
    if(top == 0)
        printf("The stack is empty\n\n");
    else{
        struct node * temp = top;
        top = top->link;
        free(temp);
    }
}

void peek(){
    if(top == 0)
        printf("The stack is empty\n\n");
    else
        printf("The top value of the stack is : %d\n\n",top->data);
}

void display(){
    struct node * temp = top;
    if(top == 0)
        printf("The stack is empty\n\n");
    else{
        while(temp->link != 0){
            printf("%d -> ",temp->data);
            temp=temp->link;
        }
        printf("%d\n\n",temp->data);
    }
}

void isEmpty(){
    if(top == 0)
        printf("true\n");
    else
        printf("false\n");
}

void main(){
    int choice;
    while(1){
        printf("Choose any of the following options....\n");
        printf("1) push\n");
        printf("2) pop\n");
        printf("3) peek\n");
        printf("4) display\n");
        printf("5) isEmpty\n");
        printf("6) Terminate program\n\n");       
        printf("Enter here : ");
        scanf("%d",&choice);
        printf("\n");
        switch(choice){
            case 1:
                push();
                break;
            case 2:
                pop();
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
                printf("Invalid option\n");
        }
        if(choice == 6){
            break;
        }
        printf("\n");
    }
    printf("Terminating Program!!!!");
}