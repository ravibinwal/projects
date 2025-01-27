#include<iostream>
using namespace std;
int total=0,i;
string arr1[20],arr2[20],arr3[20],arr4[20],arr5[20];

void enterdata()
{
    cout<<"\n HOW MANY DATA YOU WANT TO ENTER =";
    cin>>total;

    for(i=1;i<=total;i++)
    {
        cout<<"\n DATA OF STUDENT"<<i<<endl;
        cout<<"ENTER YOUR NAME =";
        cin>>arr1[i];
        cout<<"ENTER YOUR FATHER NAME =";
        cin>>arr2[i];
        cout<<"ENTER YOUR MOTHER NAME =";
        cin>>arr3[i];
        cout<<"ENTER YOUR ROLL NO =";
        cin>>arr4[i];
        cout<<"ENTER YOUR CLASS =";
        cin>>arr5[i];
        cout<<endl;
    }
}

void showdata()
{
    if(total==0)
    cout<<"\n NO DATA ENTERED ";

    else
    {
        for(i=1;i<=total;i++)
        {
            
            cout<<"\n NAME ="<<arr1[i]<<endl;
            cout<<"FATHER NAME ="<<arr2[i]<<endl;
            cout<<"MOTHE R NAME ="<<arr3[i]<<endl;
            cout<<"ROLL NO ="<<arr4[i]<<endl;
            cout<<"CLASS ="<<arr5[i]<<endl;
        }
    }
}

void searchdata()
{
    if(total==0)
    cout<<"\n NO DATA ENTERED ";
    else
    {
        string roll;
        cout<<"\n ENTER THE ROLL NO WHOSE DATA YOU WANT TO SEARCH =";
        cin>>roll;
        for(i=1;i<=total;i++)
        {
            if(roll==arr4[i])
            {
                cout<<"\n NAME ="<<arr1[i]<<endl;
                cout<<"FATHER NAME ="<<arr2[i]<<endl;
                cout<<"MOTHE R NAME ="<<arr3[i]<<endl;
                cout<<"ROLL NO ="<<arr4[i]<<endl;
                cout<<"CLASS ="<<arr5[i]<<endl;
       
            }
        }
    }
}

void updatedata()
{
    if(total==0)
    cout<<"\n NO DATA ENTERED ";
    else
    {
        string roll;
        cout<<"\n ENTER THE ROLL NO WHOSE DATA YOU WANT TO UPDATE =";
        cin>>roll;
        for(i=1;i<=total;i++)
        {
            if(roll==arr4[i])
            {
                cout<<"\nENTER YOUR NAME =";
                cin>>arr1[i];
                cout<<"ENTER YOUR FATHER NAME =";
                cin>>arr2[i];
                cout<<"ENTER YOUR MOTHER NAME =";
                cin>>arr3[i];
                cout<<"ENTER YOUR ROLL NO =";
                cin>>arr4[i];
                cout<<"ENTER YOUR CLASS =";
                cin>>arr5[i];
                cout<<endl;
            }
        }
    }
}
void deletedata()
{
    if(total==0)
    cout<<"\n NO DATA ENTERED";
    else
    {
        int here,j;
        cout<<"\n PRESS 1 FOR DELETE FULL RECORD";
        cout<<"\n PRESS 2 FOR DELETE SPECIFIC  RECORD";
        cout<<"\n\n ENTER HERE =";
        cin>>here;
         
         if(here==1)
         {
            total=0;
         }
         else
         {
            string roll;
            cout<<"\n ENTER THE ROLL NO WHOSE RECORD YOU WANT TO DELETE =";
            cin>>roll;

            for(i=1;i<=total;i++)
            {
                if(roll==arr4[i])
                {   
                  for(j=1;j<=total;j++)
                   {
                    arr1[j]=arr1[j+1];
                    arr2[j]=arr2[j+1];
                    arr3[j]=arr3[j+1];
                    arr4[j]=arr4[j+1];
                    arr5[j]=arr5[j+1];
                   }
                   total--;
                }
            

            }
         }
    }
}    

void exit()
{

}

main()
{
    int press;
    while(true)
    {
        cout<<"\n PRESS 1 TO ENTER DATA"<<endl;
        cout<<"\n PRESS 2 TO SHOW DATA"<<endl;
        cout<<"\n PRESS 3 TO SEARCH DATA"<<endl;
        cout<<"\n PRESS 4 TO UPDATE DATA"<<endl;
        cout<<"\n PRESS 5 TO DELETE DATA"<<endl;
        cout<<"\n PRESS 6 TO EXIT"<<endl;
        cout<<"\n ENTER HERE";
        cin>>press;
        switch(press)
        {
            case 1:enterdata();break;
            case 2:showdata();break;
            case 3:searchdata();break;
            case 4:updatedata();break;
            case 5:deletedata();break;
            case 6:exit(0);break;
            default:cout<<"YOU ENTERED WRONG ";break;
        }
    }
}