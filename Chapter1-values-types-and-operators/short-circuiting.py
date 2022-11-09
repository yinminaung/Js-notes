# Short-Circuiting of logical operators

print("user" or 3) # "user" evaluated to true, so "user" is returned
print(0 or "hi")   # 0 evaluated to false, so "hi" is returned

print("user" and "bro") # "user" evaluated to true, so returns the right operand
print("user" and "a")
print(0 and "hi") # 0 evaluated to false, so 0 is returned. 
print("" and "hi") 

print(True or a + 1)  # a + 1 should returns ValueError, but it is not evaluated
print(False and y - 3) # y - 3 is never evaulated. 

