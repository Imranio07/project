n = int(input())
a = n%10
b = n%100//10
c = n%1000//100

d = n//100000
e = n//10000%10
f = n//1000%10
print(d,e,f)
