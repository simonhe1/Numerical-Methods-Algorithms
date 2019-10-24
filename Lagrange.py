def lagrange(x,y, val):
    result = 0
    for i in range(len(x)):
        term = 1.0
        for j in range(len(y)):
            if(not(i==j)):
                term *= float( float(val-x[j]) / float(x[i] - x[j]) )
                print(str(term))
        result += float(term * y[i])
    return str(result)

X = [0,2,4]
Y = [1,5,17]
print(lagrange(X,Y,10))
