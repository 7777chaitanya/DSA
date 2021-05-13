#include <stdio.h>
#include <stdlib.h>

struct node{
    int data;
    struct node * next;
};

struct node * head, * tail, * temp;

int length_ll(){
    int length=1;
    while(temp->next!=head){
        length++;
        temp = temp->next;
    }
    temp=head;
    return length;
}

void create_node(){
    struct node * newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the value that you want to insert : ");
    scanf("%d",&newnode->data);
    if(head == 0){
        head = newnode;
        newnode->next = 0;
        tail = head;
    }
    else{
        tail->next = newnode;
        tail = tail->next;
        tail->next = head;
    }
}

void display(){
    temp = head;
    if(head->next == 0)
    {
        printf("%d",head->data);
    }
    else
    {
    while(temp->next!=head){
        printf("%d --> ",temp->data);
        temp = temp->next;
    }
    printf("%d\n\n",temp->data);
    temp = head;
    }
}

void insert_at_beginning(){
    struct node * newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the value : ");
    scanf("%d",&newnode->data);
    newnode->next = head;
    head = newnode;
    tail->next = head;
}

void insert_at_end(){
    struct node * newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the value : ");
    scanf("%d",&newnode->data);
    tail->next = newnode;
    tail = tail->next;
    tail->next = head;
}

void insert_at_position(){
        printf("Enter the position\n");
        printf("The value should lie between 1 and %d : ",length_ll()+1);
        int pos;
        scanf("%d",&pos);
        int length = length_ll();

        if(pos<1 || pos>(length+1)){
            printf("Invalid position");
            insert_at_position();
        }
        else if(pos == 1){
            insert_at_beginning();
        }
        else if(pos == (length+1)){
            insert_at_end();
        }
        else{
            struct node * newnode = (struct node *)malloc(sizeof(struct node));
            printf("Enter the value to insert : ");
            scanf("%d",&newnode->data);
            int i=1;
            while(i<pos-1){
                temp = temp->next;
                i++;
            }
            newnode->next = temp->next;
            temp->next = newnode;      
        }
        temp = head;
}

void delete_from_beginning(){
    head = head->next;
    free(tail->next);
    tail->next = head;
    temp = head;
}

void delete_from_end(){
    int length = length_ll();
    int i = 1;
    while(i<length-1){
        temp = temp->next;
        i++;
    }
    free(tail);
    tail = temp;
    tail->next = head;
    temp = head;
}

void delete_from_position(){
    printf("Enter the position from where you want to delete\n");
    printf("The value should lie between 1 and %d : ",length_ll());
    int pos;
    scanf("%d",&pos);
    int length = length_ll();

    if(pos<1 || pos >length){
        printf("Invalid position..");
        delete_from_position();
    }
    else if(pos == 1){
        delete_from_beginning();
    }
    else if(pos == length){
        delete_from_end();
    }
    else{
        int i = 1;
        while(i<pos-1)
        {
            temp = temp->next;
            i++;
        }
        struct node * temp1 = temp->next;
        temp->next = temp1->next;
        free(temp1);
    }
    temp=head;
}

void reverse(){
    struct node * prev = temp;
    temp = prev->next;
    struct node * temp1;
    while(temp != head){
        temp1 = temp->next;
        temp->next = prev;
        prev = temp;
        temp = temp1;     
    }
    head = tail;
    tail = temp;
    tail->next = head;
    temp = head;
    display();
    //reverse the linkedlist again to get the previous linkedlist
}

void main(){
    int choice = 1;
    int option;
    while(choice){
        printf("Choose any of the following options,\n");
        printf("1 - Create node\n");
        printf("2 - Display Linked List\n");
        printf("3 - Insert at beginning\n");
        printf("4 - Insert at a position\n");
        printf("5 - Insert at the end\n");
        printf("6 - Delete from the beginning\n");
        printf("7 - Delete from a position\n");
        printf("8 - Delete from the end\n");
        printf("9 - Reverse the Linked List\n");
        printf("10 - Length of the Linked List\n");
        scanf("%d",&option);

        switch(option){
            case 1:
            create_node();
            break;
            case 2:
            display();
            break;
            case 3:
            insert_at_beginning();
            break;
            case 4:
            insert_at_position();
            break;
            case 5:
            insert_at_end();
            break;
            case 6:
            delete_from_beginning();
            break;
            case 7:
            delete_from_position();
            break;
            case 8:
            delete_from_end();
            break;
            case 9:
            reverse();
            break;
            case 10:
            printf("The length of the Linked List is : %d",length_ll());
            break;         
        }
        printf("\n");      
    }
}
