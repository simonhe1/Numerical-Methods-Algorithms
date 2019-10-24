def neville(x, y, xVal):
    length = len(x)
    p = length*[0]
    for i in range(length):
        for j in range(length-i):
            if i == 0:
                p[j] = y[j]
            else:
                p[j] = ((xVal-x[j+i])*p[j]+ \
                        (x[j]-xVal)*p[j+1])/ \
                        (x[j]-x[j+i])
    return p[0]