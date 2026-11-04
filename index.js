import express from 'express';

const app = express();

app.use(express.json());

// const programss = `

// // ==========================================
// // PROGRAM 1: TRAVERSING AN ARRAY
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// void main()
// {
//     clrscr();

//     int arr[5], i;

//     cout<<"Enter 5 elements:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cin>>arr[i];
//     }

//     cout<<"Traversing the array:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cout<<"arr["<<i<<"]="<<arr[i]<<endl;
//     }

//     getch();
// }


// // ==========================================
// // PROGRAM 2: LINEAR SEARCH
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// void main()
// {
//     clrscr();

//     int arr[5], i, item, found=0;

//     cout<<"Enter 5 elements:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cin>>arr[i];
//     }

//     cout<<"Enter element to search: ";
//     cin>>item;

//     for(i=0; i<5; i++)
//     {
//         if(arr[i]==item)
//         {
//             found=1;
//             break;
//         }
//     }

//     if(found==1)
//     {
//         cout<<"Element found at position "<<i+1;
//     }
//     else
//     {
//         cout<<"Element not found";
//     }

//     getch();
// }


// // ==========================================
// // PROGRAM 3: BINARY SEARCH
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// void main()
// {
//     clrscr();

//     int arr[5], i, item;
//     int low=0, high=4, mid, found=0;

//     cout<<"Enter 5 sorted elements:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cin>>arr[i];
//     }

//     cout<<"Enter element to search: ";
//     cin>>item;

//     while(low<=high)
//     {
//         mid=(low+high)/2;

//         if(arr[mid]==item)
//         {
//             found=1;
//             break;
//         }
//         else if(arr[mid]<item)
//         {
//             low=mid+1;
//         }
//         else
//         {
//             high=mid-1;
//         }
//     }

//     if(found==1)
//     {
//         cout<<"Element found at position "<<mid+1;
//     }
//     else
//     {
//         cout<<"Element not found";
//     }

//     getch();
// }


// // ==========================================
// // PROGRAM 4: INSERTION IN AN ARRAY
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// void main()
// {
//     clrscr();

//     int arr[10], i, n, pos, item;

//     cout<<"Enter number of elements: ";
//     cin>>n;

//     cout<<"Enter array elements:"<<endl;

//     for(i=0; i<n; i++)
//     {
//         cin>>arr[i];
//     }

//     cout<<"Enter element to insert: ";
//     cin>>item;

//     cout<<"Enter position: ";
//     cin>>pos;

//     for(i=n; i>=pos; i--)
//     {
//         arr[i]=arr[i-1];
//     }

//     arr[pos-1]=item;
//     n++;

//     cout<<"Array after insertion:"<<endl;

//     for(i=0; i<n; i++)
//     {
//         cout<<arr[i]<<" ";
//     }

//     getch();
// }


// // ==========================================
// // PROGRAM 5: DELETION FROM AN ARRAY
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// void main()
// {
//     clrscr();

//     int arr[10], i, n, pos;

//     cout<<"Enter number of elements: ";
//     cin>>n;

//     cout<<"Enter array elements:"<<endl;

//     for(i=0; i<n; i++)
//     {
//         cin>>arr[i];
//     }

//     cout<<"Enter position to delete: ";
//     cin>>pos;

//     for(i=pos-1; i<n-1; i++)
//     {
//         arr[i]=arr[i+1];
//     }

//     n--;

//     cout<<"Array after deletion:"<<endl;

//     for(i=0; i<n; i++)
//     {
//         cout<<arr[i]<<" ";
//     }

//     getch();
// }


// // ==========================================
// // PROGRAM 6: BUBBLE SORT (ASCENDING)
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// void main()
// {
//     clrscr();

//     int arr[5], i, j, temp;

//     cout<<"Enter 5 elements:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cin>>arr[i];
//     }

//     for(i=0; i<4; i++)
//     {
//         for(j=0; j<4-i; j++)
//         {
//             if(arr[j]>arr[j+1])
//             {
//                 temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }

//     cout<<"Sorted array:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cout<<arr[i]<<" ";
//     }

//     getch();
// }


// // ==========================================
// // PROGRAM 7: BUBBLE SORT (DESCENDING)
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// void main()
// {
//     clrscr();

//     int arr[5], i, j, temp;

//     cout<<"Enter 5 elements:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cin>>arr[i];
//     }

//     for(i=0; i<4; i++)
//     {
//         for(j=0; j<4-i; j++)
//         {
//             if(arr[j]<arr[j+1])
//             {
//                 temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }

//     cout<<"Sorted array:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cout<<arr[i]<<" ";
//     }

//     getch();
// }


// // ==========================================
// // PROGRAM 8: SELECTION SORT
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// void main()
// {
//     clrscr();

//     int arr[5], i, j, min, temp;

//     cout<<"Enter 5 elements:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cin>>arr[i];
//     }

//     for(i=0; i<4; i++)
//     {
//         min=i;

//         for(j=i+1; j<5; j++)
//         {
//             if(arr[j]<arr[min])
//             {
//                 min=j;
//             }
//         }

//         temp=arr[i];
//         arr[i]=arr[min];
//         arr[min]=temp;
//     }

//     cout<<"Sorted array:"<<endl;

//     for(i=0; i<5; i++)
//     {
//         cout<<arr[i]<<" ";
//     }

//     getch();
// }


// // ==========================================
// // PROGRAM 9: SINGLY LINKED LIST
// // ==========================================

// #include<iostream.h>
// #include<conio.h>
// #include<alloc.h>

// struct node
// {
//     int data;
//     node *next;
// };

// node *head=NULL;

// void create()
// {
//     node *temp, *newnode;
//     int i, n;

//     cout<<"Enter number of nodes: ";
//     cin>>n;

//     for(i=0; i<n; i++)
//     {
//         newnode=(node*)malloc(sizeof(node));

//         cout<<"Enter data: ";
//         cin>>newnode->data;

//         newnode->next=NULL;

//         if(head==NULL)
//         {
//             head=newnode;
//         }
//         else
//         {
//             temp=head;

//             while(temp->next!=NULL)
//             {
//                 temp=temp->next;
//             }

//             temp->next=newnode;
//         }
//     }
// }

// void display()
// {
//     node *temp=head;

//     if(head==NULL)
//     {
//         cout<<"List is empty";
//         return;
//     }

//     while(temp!=NULL)
//     {
//         cout<<temp->data<<" ";
//         temp=temp->next;
//     }
// }

// void insert()
// {
//     node *newnode, *temp;
//     int pos, i;

//     newnode=(node*)malloc(sizeof(node));

//     cout<<"Enter data: ";
//     cin>>newnode->data;

//     cout<<"Enter position: ";
//     cin>>pos;

//     if(pos==1)
//     {
//         newnode->next=head;
//         head=newnode;
//     }
//     else
//     {
//         temp=head;

//         for(i=1; i<pos-1; i++)
//         {
//             temp=temp->next;
//         }

//         newnode->next=temp->next;
//         temp->next=newnode;
//     }
// }

// void deletion()
// {
//     node *temp, *del;
//     int pos, i;

//     cout<<"Enter position to delete: ";
//     cin>>pos;

//     if(pos==1)
//     {
//         del=head;
//         head=head->next;
//         free(del);
//     }
//     else
//     {
//         temp=head;

//         for(i=1; i<pos-1; i++)
//         {
//             temp=temp->next;
//         }

//         del=temp->next;
//         temp->next=del->next;

//         free(del);
//     }
// }

// void main()
// {
//     clrscr();

//     create();

//     cout<<"Linked list: ";
//     display();

//     insert();

//     cout<<"\nAfter insertion: ";
//     display();

//     deletion();

//     cout<<"\nAfter deletion: ";
//     display();

//     getch();
// }


// // ==========================================
// // PROGRAM 10: DOUBLY LINKED LIST
// // ==========================================

// #include<iostream.h>
// #include<conio.h>
// #include<alloc.h>

// struct node
// {
//     int data;
//     node *prev;
//     node *next;
// };

// node *head=NULL;

// void create()
// {
//     node *newnode, *temp;
//     int n, i;

//     cout<<"Enter number of nodes: ";
//     cin>>n;

//     for(i=0; i<n; i++)
//     {
//         newnode=(node*)malloc(sizeof(node));

//         cout<<"Enter data: ";
//         cin>>newnode->data;

//         newnode->prev=NULL;
//         newnode->next=NULL;

//         if(head==NULL)
//         {
//             head=newnode;
//         }
//         else
//         {
//             temp=head;

//             while(temp->next!=NULL)
//             {
//                 temp=temp->next;
//             }

//             temp->next=newnode;
//             newnode->prev=temp;
//         }
//     }
// }

// void display()
// {
//     node *temp=head;

//     cout<<"Doubly linked list:"<<endl;

//     while(temp!=NULL)
//     {
//         cout<<temp->data<<" ";
//         temp=temp->next;
//     }
// }

// void main()
// {
//     clrscr();

//     create();
//     display();

//     getch();
// }


// // ==========================================
// // PROGRAM 11: STACK OPERATIONS
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// int stack[5];
// int top=-1;

// void push()
// {
//     int item;

//     if(top==4)
//     {
//         cout<<"Stack Overflow";
//     }
//     else
//     {
//         cout<<"Enter element: ";
//         cin>>item;

//         top++;
//         stack[top]=item;
//     }
// }

// void pop()
// {
//     if(top==-1)
//     {
//         cout<<"Stack Underflow";
//     }
//     else
//     {
//         cout<<"Deleted element: "<<stack[top];
//         top--;
//     }
// }

// void display()
// {
//     int i;

//     if(top==-1)
//     {
//         cout<<"Stack is empty";
//     }
//     else
//     {
//         cout<<"Stack elements:"<<endl;

//         for(i=top; i>=0; i--)
//         {
//             cout<<stack[i]<<endl;
//         }
//     }
// }

// void main()
// {
//     clrscr();

//     push();
//     push();
//     push();

//     display();

//     pop();

//     cout<<"\nAfter pop:"<<endl;

//     display();

//     getch();
// }


// // ==========================================
// // PROGRAM 12: QUEUE OPERATIONS
// // ==========================================

// #include<iostream.h>
// #include<conio.h>

// int queue[5];
// int front=-1;
// int rear=-1;

// void insert()
// {
//     int item;

//     if(rear==4)
//     {
//         cout<<"Queue Overflow";
//     }
//     else
//     {
//         cout<<"Enter element: ";
//         cin>>item;

//         if(front==-1)
//         {
//             front=0;
//         }

//         rear++;
//         queue[rear]=item;
//     }
// }

// void deletion()
// {
//     if(front==-1 || front>rear)
//     {
//         cout<<"Queue Underflow";
//     }
//     else
//     {
//         cout<<"Deleted element: "<<queue[front];

//         front++;
//     }
// }

// void display()
// {
//     int i;

//     if(front==-1 || front>rear)
//     {
//         cout<<"Queue is empty";
//     }
//     else
//     {
//         cout<<"Queue elements:"<<endl;

//         for(i=front; i<=rear; i++)
//         {
//             cout<<queue[i]<<" ";
//         }
//     }
// }

// void main()
// {
//     clrscr();

//     insert();
//     insert();
//     insert();

//     display();

//     deletion();

//     cout<<"\nAfter deletion:"<<endl;

//     display();

//     getch();
// }

// `;

const programs = `
DATA STRUCTURES PRACTICAL PROGRAMS (TURBO C++)
Each program is separate. Save and run one program at a time.

// ==========================================
// PROGRAM 1: TRAVERSING AN ARRAY
// ==========================================

#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int arr[5], i;

    cout<<"Enter 5 elements:"<<endl;

    for(i=0; i<5; i++)
    {
        cin>>arr[i];
    }

    cout<<"Traversing the array:"<<endl;

    for(i=0; i<5; i++)
    {
        cout<<"arr["<<i<<"]="<<arr[i]<<endl;
    }

    getch();
}


// ==========================================
// PROGRAM 2: LINEAR SEARCH
// ==========================================

#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int arr[5], i, item, found=0;

    cout<<"Enter 5 elements:"<<endl;

    for(i=0; i<5; i++)
    {
        cin>>arr[i];
    }

    cout<<"Enter element to search: ";
    cin>>item;

    for(i=0; i<5; i++)
    {
        if(arr[i]==item)
        {
            found=1;
            break;
        }
    }

    if(found==1)
    {
        cout<<"Element found at position "<<i+1;
    }
    else
    {
        cout<<"Element not found";
    }

    getch();
}


// ==========================================
// PROGRAM 3: BINARY SEARCH
// ==========================================

#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int arr[5], i, item;
    int low=0, high=4, mid, found=0;

    cout<<"Enter 5 sorted elements:"<<endl;

    for(i=0; i<5; i++)
    {
        cin>>arr[i];
    }

    cout<<"Enter element to search: ";
    cin>>item;

    while(low<=high)
    {
        mid=(low+high)/2;

        if(arr[mid]==item)
        {
            found=1;
            break;
        }
        else if(arr[mid]<item)
        {
            low=mid+1;
        }
        else
        {
            high=mid-1;
        }
    }

    if(found==1)
    {
        cout<<"Element found at position "<<mid+1;
    }
    else
    {
        cout<<"Element not found";
    }

    getch();
}


// ==========================================
// PROGRAM 4: INSERTION IN AN ARRAY
// ==========================================

#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int arr[10], i, n, pos, item;

    cout<<"Enter number of elements: ";
    cin>>n;

    cout<<"Enter array elements:"<<endl;

    for(i=0; i<n; i++)
    {
        cin>>arr[i];
    }

    cout<<"Enter element to insert: ";
    cin>>item;

    cout<<"Enter position: ";
    cin>>pos;

    for(i=n; i>=pos; i--)
    {
        arr[i]=arr[i-1];
    }

    arr[pos-1]=item;
    n++;

    cout<<"Array after insertion:"<<endl;

    for(i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }

    getch();
}


// ==========================================
// PROGRAM 5: DELETION FROM AN ARRAY
// ==========================================

#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int arr[10], i, n, pos;

    cout<<"Enter number of elements: ";
    cin>>n;

    cout<<"Enter array elements:"<<endl;

    for(i=0; i<n; i++)
    {
        cin>>arr[i];
    }

    cout<<"Enter position to delete: ";
    cin>>pos;

    for(i=pos-1; i<n-1; i++)
    {
        arr[i]=arr[i+1];
    }

    n--;

    cout<<"Array after deletion:"<<endl;

    for(i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }

    getch();
}


// ==========================================
// PROGRAM 6: BUBBLE SORT (ASCENDING)
// ==========================================

#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int arr[5], i, j, temp;

    cout<<"Enter 5 elements:"<<endl;

    for(i=0; i<5; i++)
    {
        cin>>arr[i];
    }

    for(i=0; i<4; i++)
    {
        for(j=0; j<4-i; j++)
        {
            if(arr[j]>arr[j+1])
            {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    cout<<"Sorted array:"<<endl;

    for(i=0; i<5; i++)
    {
        cout<<arr[i]<<" ";
    }

    getch();
}


// ==========================================
// PROGRAM 7: BUBBLE SORT (DESCENDING)
// ==========================================

#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int arr[5], i, j, temp;

    cout<<"Enter 5 elements:"<<endl;

    for(i=0; i<5; i++)
    {
        cin>>arr[i];
    }

    for(i=0; i<4; i++)
    {
        for(j=0; j<4-i; j++)
        {
            if(arr[j]<arr[j+1])
            {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    cout<<"Sorted array:"<<endl;

    for(i=0; i<5; i++)
    {
        cout<<arr[i]<<" ";
    }

    getch();
}


// ==========================================
// PROGRAM 8: SELECTION SORT
// ==========================================

#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int arr[5], i, j, min, temp;

    cout<<"Enter 5 elements:"<<endl;

    for(i=0; i<5; i++)
    {
        cin>>arr[i];
    }

    for(i=0; i<4; i++)
    {
        min=i;

        for(j=i+1; j<5; j++)
        {
            if(arr[j]<arr[min])
            {
                min=j;
            }
        }

        temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }

    cout<<"Sorted array:"<<endl;

    for(i=0; i<5; i++)
    {
        cout<<arr[i]<<" ";
    }

    getch();
}


// ==========================================
// PROGRAM 9: SINGLY LINKED LIST
// ==========================================

#include<iostream.h>
#include<conio.h>
#include<alloc.h>

struct node
{
    int data;
    node *next;
};

node *head=NULL;

void create()
{
    node *temp, *newnode;
    int i, n;

    cout<<"Enter number of nodes: ";
    cin>>n;

    for(i=0; i<n; i++)
    {
        newnode=(node*)malloc(sizeof(node));

        cout<<"Enter data: ";
        cin>>newnode->data;

        newnode->next=NULL;

        if(head==NULL)
        {
            head=newnode;
        }
        else
        {
            temp=head;

            while(temp->next!=NULL)
            {
                temp=temp->next;
            }

            temp->next=newnode;
        }
    }
}

void display()
{
    node *temp=head;

    if(head==NULL)
    {
        cout<<"List is empty";
        return;
    }

    while(temp!=NULL)
    {
        cout<<temp->data<<" ";
        temp=temp->next;
    }
}

void insert()
{
    node *newnode, *temp;
    int pos, i;

    newnode=(node*)malloc(sizeof(node));

    cout<<"Enter data: ";
    cin>>newnode->data;

    cout<<"Enter position: ";
    cin>>pos;

    if(pos==1)
    {
        newnode->next=head;
        head=newnode;
    }
    else
    {
        temp=head;

        for(i=1; i<pos-1; i++)
        {
            temp=temp->next;
        }

        newnode->next=temp->next;
        temp->next=newnode;
    }
}

void deletion()
{
    node *temp, *del;
    int pos, i;

    cout<<"Enter position to delete: ";
    cin>>pos;

    if(pos==1)
    {
        del=head;
        head=head->next;
        free(del);
    }
    else
    {
        temp=head;

        for(i=1; i<pos-1; i++)
        {
            temp=temp->next;
        }

        del=temp->next;
        temp->next=del->next;

        free(del);
    }
}

void main()
{
    clrscr();

    create();

    cout<<"Linked list: ";
    display();

    insert();

    cout<<"\nAfter insertion: ";
    display();

    deletion();

    cout<<"\nAfter deletion: ";
    display();

    getch();
}


// ==========================================
// PROGRAM 10: DOUBLY LINKED LIST
// ==========================================

#include<iostream.h>
#include<conio.h>
#include<alloc.h>

struct node
{
    int data;
    node *prev;
    node *next;
};

node *head=NULL;

void create()
{
    node *newnode, *temp;
    int n, i;

    cout<<"Enter number of nodes: ";
    cin>>n;

    for(i=0; i<n; i++)
    {
        newnode=(node*)malloc(sizeof(node));

        cout<<"Enter data: ";
        cin>>newnode->data;

        newnode->prev=NULL;
        newnode->next=NULL;

        if(head==NULL)
        {
            head=newnode;
        }
        else
        {
            temp=head;

            while(temp->next!=NULL)
            {
                temp=temp->next;
            }

            temp->next=newnode;
            newnode->prev=temp;
        }
    }
}

void display()
{
    node *temp=head;

    cout<<"Doubly linked list:"<<endl;

    while(temp!=NULL)
    {
        cout<<temp->data<<" ";
        temp=temp->next;
    }
}

void main()
{
    clrscr();

    create();
    display();

    getch();
}


// ==========================================
// PROGRAM 11: STACK OPERATIONS
// ==========================================

#include<iostream.h>
#include<conio.h>

int stack[5];
int top=-1;

void push()
{
    int item;

    if(top==4)
    {
        cout<<"Stack Overflow";
    }
    else
    {
        cout<<"Enter element: ";
        cin>>item;

        top++;
        stack[top]=item;
    }
}

void pop()
{
    if(top==-1)
    {
        cout<<"Stack Underflow";
    }
    else
    {
        cout<<"Deleted element: "<<stack[top];
        top--;
    }
}

void display()
{
    int i;

    if(top==-1)
    {
        cout<<"Stack is empty";
    }
    else
    {
        cout<<"Stack elements:"<<endl;

        for(i=top; i>=0; i--)
        {
            cout<<stack[i]<<endl;
        }
    }
}

void main()
{
    clrscr();

    push();
    push();
    push();

    display();

    pop();

    cout<<"\nAfter pop:"<<endl;

    display();

    getch();
}


// ==========================================
// PROGRAM 12: QUEUE OPERATIONS
// ==========================================

#include<iostream.h>
#include<conio.h>

int queue[5];
int front=-1;
int rear=-1;

void insert()
{
    int item;

    if(rear==4)
    {
        cout<<"Queue Overflow";
    }
    else
    {
        cout<<"Enter element: ";
        cin>>item;

        if(front==-1)
        {
            front=0;
        }

        rear++;
        queue[rear]=item;
    }
}

void deletion()
{
    if(front==-1 || front>rear)
    {
        cout<<"Queue Underflow";
    }
    else
    {
        cout<<"Deleted element: "<<queue[front];

        front++;
    }
}

void display()
{
    int i;

    if(front==-1 || front>rear)
    {
        cout<<"Queue is empty";
    }
    else
    {
        cout<<"Queue elements:"<<endl;

        for(i=front; i<=rear; i++)
        {
            cout<<queue[i]<<" ";
        }
    }
}

void main()
{
    clrscr();

    insert();
    insert();
    insert();

    display();

    deletion();

    cout<<"\nAfter deletion:"<<endl;

    display();

    getch();
}
`

app.get('/programs', (req, res) => {
    res.type('text/plain');
    res.send(programs);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

