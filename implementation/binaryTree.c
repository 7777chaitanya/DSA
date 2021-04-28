#include <stdio.h>
#include <stdlib.h>

struct node{
    int data;
    struct node * left;
    struct node * right;
};

struct node * create(){
    //creating a newnode
    struct node * newnode;
    newnode = (struct node *)malloc(sizeof(struct node));

    //getting the value in the node
    printf("Enter the value that you want to insert in the node : ");
    scanf("%d",&newnode->data);
    printf("\n");

    //asking if the user needs to enter a left child and invoking
    //the create method if the user needs one
    int leftChildNeeded;
    printf("Press 1 to enter a left child/0 if you don't want a left child for %d: ",newnode->data);
    scanf("%d",&leftChildNeeded);
    if(leftChildNeeded == 1){
        newnode->left = create();
    }
    else{
        newnode->left = 0;
    }
    printf("\n");

    //asking if the user needs to enter a right child and invoking the create() method
    //to create the right child if the user needs one
    int rightChildNeeded;
    printf("Press 1 to enter a right child/0 if you don't want a right child for %d: ",newnode->data);
    scanf("%d",&rightChildNeeded);
    if(rightChildNeeded == 1){
        newnode->left = create();
    }
    else{
        newnode->left = 0;
    }
    printf("\n");
    return newnode;
}

void main(){
    struct node * root;
    root = create();
    printf("The root value of the tree is : %d",root->data);
}