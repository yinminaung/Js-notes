# Python supporting first class functions

def adder (a, b):
    return a + b

def mul (a, b):
    return a * b 

a = adder # function assigned as a value to a variable
print(a(3, 4))


# functions passing as arguments to other functions
def runner(fun, li):
    if fun == adder:
        total = 0
    else: 
        total = 1
    for i in li:
        total = fun(total, i)
    return total 

print(runner(adder, [1, 2, 3, 4]))
print(runner(mul, [1, 2, 3, 4]))


# returning functions in other functions 
def funReturn():
    def greet():
        return "Hello"

    return greet 


print(type(funReturn()))
print(funReturn()())
