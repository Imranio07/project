x=int(input())
y=int(input())
count=0
i=x+x*0.1
while i<y:
    count+=1
    i=i+1
print(count)