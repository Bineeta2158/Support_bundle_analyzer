import re
import pandas as  pd
import csv
import json
import sys

l1=[]
k1=[]
l2=[]
l3=[]
dict={"OutOfMemoryError": "Increase the maximum heap size","LoginException":"Enter correct Username and Password","AuthenticationException":"Try Again after some time"} 

def matchDate(line):
        matchThis = ""
        matched = re.match(r'\d\d\d\d-\d\d-\d\d\ \d\d:\d\d:\d\d',line)
        if matched:
            #matches a date and adds it to matchThis            
            matchThis = matched.group() 
        else:
            matchThis = "NONE"
        return matchThis
def ALL_LOGS_DATE_RANGE():
      print("Logs in  date range(dd)   ") #logs in a specific date range
      var2=input("1st date:")
      print()
      var3=input("2nd date:")
      print()
      csv_file1=csv.reader(open('data.csv','r'),delimiter=",")    
      bleh2=[]  
      for row in csv_file1:
         time=" "
         
         if((var2[0]==row[0][10] and var2[1]<=row[0][11]) and (var3[0]==row[0][10] and var3[1]>=row[0][11])):
            #print(var2[0],row[0][10],row[0][11],var3[1])
            if row[2] in bleh2:                #to remove duplicates
              pass
            else:
              bleh2.append(row[2])   
              print(row)
      if(len(bleh2)== 0):
          print("\nNo logs available on that date\n")            
def TYPE():
     var1=input("Type of log(INFO/WARN/ERROR):    ")
     csv_file=csv.reader(open('data.csv','r'),delimiter=",")
     #var2='type': 'WARN'
     bleh1=[]
     bleh5=[]
     var5=var1
     var1+=".csv"
     with open(var1, 'r') as file:        #display the csv file for type of error
       reader = csv.reader(file)
       for row in reader:
          bleh5.append(row[2])
          print(row)
          print()
     #print(var1)     
     if(var5=="ERROR"):
       DisplaySol()
       
def ERROR():
     print("ERROR Logs in  date range(dd)\n   ") #logs in a specific date range
     var2=input("1st date:")
     print()
     var3=input("2nd date:")
     print()
     csv_file1=csv.reader(open('ERROR.csv','r'),delimiter=",")    
     bleh2=[]  
     bleh3=" "
     for row in csv_file1:
         time=" "
         #print(var2[0],var3[1])
         if((var2[0]==row[0][10] and var2[1]<=row[0][11]) and (var3[0]==row[0][10] and var3[1]>=row[0][11])):
            if row[2] in bleh2:                #to remove duplicates
              pass
            else:
              bleh2.append(row[2]) 
              print(row)
     print()
     if(len(bleh2)== 0):
          print("\nNo logs available on that date\n") 
     else:              
         DisplaySol()
                
def WARN():  
     print("WARN Logs in  date range(dd)\n    ") #logs in a specific date range
     var2=input("1st date:")
     print()
     var3=input("2nd date:")
     print()
     csv_file1=csv.reader(open('WARN.csv','r'),delimiter=",")    
     bleh3=[]
     for row in csv_file1:
         time=" "
         #print(var2[0],var3[1])
         if((var2[0]==row[0][10] and var2[1]<=row[0][11]) and (var3[0]==row[0][10] and var3[1]>=row[0][11])):
            if row[2] in bleh3:                #to remove duplicates
              pass
            else:
              bleh3.append(row[2])   
              print(row)
     if(len(bleh3)== 0):
          print("\nNo logs available on that date\n") 
def INFO():
     print("INFO Logs in  date range(only date)\n    ")  #logs in a specific date range
     var2=input("1st date:")
     print()
     var3=input("2nd date:")
     print()
     csv_file1=csv.reader(open('INFO.csv','r'),delimiter=",")    
     bleh2=[] 
     bleh3=[]
     for row in csv_file1:
         time=" "
         #print(var2[0],var3[1])
         if((var2[0]==row[0][10] and var2[1]<=row[0][11]) and (var3[0]==row[0][10] and var3[1]>=row[0][11])):
            if row[2] in bleh2:                #to remove duplicates
              pass
            else:
              bleh2.append(row[2])   
              print(row)
     if(len(bleh2)== 0):
          print("\nNo logs available on that date\n")       
def DisplaySol():
    v=0 
    print()
    str=input("Enter the error name to get solution    ")
    for x in dict:
        if (str==x):
           print(dict[x])
           v=1
           break
    if(v==0):
       print()
       res=input("No solution available,Do you want to add?(Y/N)   ")
       if(res=="Y"):
         sol=input()
         dict[str]=sol
         
   # print(dict)            
            

    

      
                                        
def generateDicts(log_fh):
    currentDict = {}
    for line in log_fh:
        if line.startswith(matchDate(line)):
            if currentDict:
                yield currentDict
            currentDict = [line.split("__")[0][:19],line.split()[3],line.split("-",9)[-1]]
            if(line.split()[3]=="ERROR"):
               m=line.split("-",9)[-1]
               if m in k1:
                   pass
               else:
                 k1.append(m)    
                 l1.append(currentDict) 
            if(line.split()[3]=="WARN"):
               m=line.split("-",9)[-1]
               if m in k1:
                   pass
               else:
                 k1.append(m)    
                 l2.append(currentDict)    
            if(line.split()[3]=="INFO"):
               m=line.split("-",9)[-1]
               if m in k1:
                   pass
               else:
                 k1.append(m)
                 l3.append(currentDict)
                       
    with open(r'ERROR.csv',"w") as g1:  
          for q in l1:
             g1.write("%s\n" %q) 
             
    with open(r'WARN.csv',"w") as g2:  
          for q in l2:
             g2.write("%s\n" %q)
       
      
    with open(r'INFO.csv',"w") as g3:  
          for q in l3:
             g3.write("%s\n" %q)                  
         
                                           
    yield currentDict
    

print("\nLog files July 2022\n")
filename = input('Enter name of input file:  ')
print()
with open(filename) as f:
     listNew=list(generateDicts(f)) 
    
     with open(r'data.csv', 'w') as fp:
       for item in listNew:
         fp.write("%s\n" % item)
         
     file=open("data.csv","r")    #to store every data
     data=[]
     order=["date","type","message"]
     for line in file.readlines():
        details = line.split(",")
        #details=[x.strip() for x in details]
        structure={key:value for key, value in zip(order,details)}
        data.append(structure)
     with open(r'simple.csv','w') as fb:
        for entry in data:
           fb.write("%s\n" %entry)  
     
     varia="Y"
     while(varia=="Y"):
              
       res2=input("Enter the number for query:\n\t1.For All the logs\n\t2.Logs in a date range\n\t3.Type of logs(INFO/WARN/ERROR)\n\t4.INFO logs in a date range\n\t5.WARN logs in a date range\n\t6.ERROR logs in a date range\n")
       print()
       if (res2=='1'):
        csv_file1=csv.reader(open('data.csv','r'),delimiter=",")    
        for row in csv_file1: 
              print(row)
       elif(res2=='2'):          
         ALL_LOGS_DATE_RANGE() 
       elif(res2=='3'):
         TYPE()
       elif(res2=='4'):
         INFO() 
       elif(res2=='5'):
         WARN() 
       elif(res2=='6'): 
         ERROR()
       else:
         print("Invalid choice") 
       print()     
       varia=input("do you want to continue(Y/N)   ")  
       print()
       
     
    
    
   
    
    
    
    
    
    
    
