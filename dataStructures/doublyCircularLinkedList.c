#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int length_ll();
struct node
{
    struct node *prev;
    int data;
    struct node *next;
} * head, *tail, *temp;

void create()
{
    // printf("create\n");
    struct node *newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the value that you want to store in the node : ");
    scanf("%d", &newnode->data);
    if (head == 0 && tail == 0)
    {
        head = tail = newnode;
    }
    else
    {
        tail->next = newnode;
        newnode->prev = tail;
        tail = tail->next;
        tail->next = head;
        head->prev = tail;
    }
    temp = head;
}

void insertAtBeginning()
{
    if(head == 0 && tail == 0){
        create();
    }
    else{
    struct node * newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the value that you want to insert : ");
    scanf("%d",&newnode->data);
    newnode->next = head;
    head->prev = newnode;
    head = head->prev;
    head->prev = tail;
    tail->next = head;
    temp = head;
    }
}

void insertAtEnd()
{
    if(head == 0 && tail == 0){
        create();
    }
    else{
    struct node * newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the value that you want to insert : ");
    scanf("%d",&newnode->data);
    newnode->next = head;
    newnode->prev = tail;
    tail->next = newnode;
    tail = tail->next;
    head->prev = newnode;
    temp = head;
    }
}

void insertAtPosition()
{
    int pos;
    int length = length_ll();
    if(head == 0 && tail == 0){
        create();
    }
else{
    while(1){   
    printf("Enter the position where you want to insert : ");
    scanf("%d",&pos);
    
    if(pos<1 || pos>(length+1)){
        printf("invalid position. Enter a value between 1 and %d",length+1);
        continue;
    }
    break;
    }
    if(pos == 1){
        insertAtBeginning();
    }
    else if(pos == length+1){
        insertAtEnd();
    }
    else{
        struct node * newnode = (struct node *)malloc(sizeof(struct node));
        printf("Enter the value that you want to insert : ");
        scanf("%d",&newnode->data);
        temp = head;
        int i = 1;
        while(i<pos-1){
            temp=temp->next;
            i++;
        }
        newnode->prev=temp;
        newnode->next = temp->next;
        temp->next = newnode;
        newnode->next->prev = newnode;

    }
}
    temp=head;
}

void deleteFromBeginning()
{
    head = head->next;
    free(head->prev);
    tail->next = head;
    head->prev = tail;
    temp=head;
}

void deleteFromEnd()
{
    tail = tail->prev;
    free(tail->next);
    tail->next=head;
    head->prev=tail;
    temp=head;
}

void deleteFromPosition()
{
    int pos;
    int length = length_ll();
    if(head == 0 && tail == 0){
        printf("The LinkedList is empty");
    }
    else{
    while(1){
    printf("Enter the position from where you want to delete : ");
    scanf("%d",&pos);
      
    if(pos<1 || pos>length){
        printf("You entered an invalid position! Please re-enter the position\n");
        continue;
    }
    break;
    }
    if(pos==1){
        deleteFromBeginning();
    }
    else if(pos==length){
        deleteFromEnd();
    }
    else{
        int i=1;
        while(i<pos-1){
            temp=temp->next;
            i++;
        }
        temp->next = temp->next->next;
        free(temp->next->prev);
        temp->next->prev = temp;
    }
    }
    temp=head;
}

int length_ll()
{
    int length = 1;
    while (temp->next != head)
    {
        temp = temp->next;
        length++;
    }
    temp = head;
    printf("The length of the LinkedList is : %d\n", length);
    return length;
}

void display()
{
    while (temp->next != head)
    {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("%d\n", temp->data);
    temp = head;
}

void reverse()
{
    temp = tail;
    while(temp->prev != tail){
        printf("%d -> ",temp->data);
        temp = temp->prev;
    }
    printf("%d\n",temp->data);
    temp = head;
}

void main()
{
    // terminate:break;
    printf("Select any of the following options to proceed...\n");
    int input;
    while (1)
    {
        printf("1) create node\n");
        printf("2) insert at beginning\n");
        printf("3) insert at end\n");
        printf("4) insert at position\n");
        printf("5) delete from beginning\n");
        printf("6) delete from end\n");
        printf("7) delete from a position\n");
        printf("8) length of the LinkedList\n");
        printf("9) display the LinkedList\n");
        printf("10) Reverse the Linked List\n");
        // printf("11) Terminate the program\n");
        printf("Enter here : ");
        scanf("%d", &input);
        switch (input)
        {
        case 1:
            create();
            break;
        case 2:
            insertAtBeginning();
            break;
        case 3:
            insertAtEnd();
            break;
        case 4:
            insertAtPosition();
            break;
        case 5:
            deleteFromBeginning();
            break;
        case 6:
            deleteFromEnd();
            break;
        case 7:
            deleteFromPosition();
            break;
        case 8:
            length_ll();
            break;
        case 9:
            display();
            break;
        case 10:
            reverse();
            break;
        default:
            break;
        }
        printf("\n");
    }
}