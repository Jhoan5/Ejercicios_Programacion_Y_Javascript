# Ejercicios_Programacion_Y_Javascript


## Ejercicios libro Enloquent-JS

1. Haciendo uso de la consola imprime el siguiente triangulo:  
  \#  
  \#\#  
  \#\#\#  
  \#\#\#\#  
  \#\#\#\#\#  
  \#\#\#\#\#\#  
  \#\#\#\#\#\#\#  
  \#\#\#\#\#\#\#\#  

2. Crea un programa que muestre los numeros de 1 a 100 pero:
  * Para cada número divisible por 3, no imprime el número e imprime fizz.
  * Para cada número divisible por 5, no imprime el número e imprime buzz.
  * Para cada número divisible por 3 y 5, no imprime el número e imprime fizzbuzz sin alterar fizz o buzz.

3. Crea un programa que imprima el siguiente cuadro de ajedrez:  
  \# \# \# \#  
   \# \# \# \#  
  \# \# \# \#  
   \# \# \# \#  
  \# \# \# \#  
   \# \# \# \#  
  \# \# \# \#  
   \# \# \# \#  

4. Crea una función que tome 2 números como parámetros y determine cuál es el valor más grande.

5. Crea una función que determine si un número es para o impar teniendo en cuenta:
  * 0 es par.
  * 1 es impar.
  * Para cualquier otro numero N su paridad es N-2.

6. Crea una función contar 'F' que haya en un string o array y luego modificala o haz otra que busque cualquier letra en el string o array.

7. Crea 3 funciones de la siguiente manera:
  * Una función con dos parámetros (inicio,final) que retorne los números intermedios entre el número inicio y el número final.
  * A la función anterior añade un tercer parámetro (inicio,final,incremento) para mostrar los valores intermedios pero con incremento. Algo como (2,8,10) resultara en (4,6,8).
  * Luego una crea una función que retorne la suma de los números que hay en un array.

8. Crea dos funciones que reversan los valores de un string o array:
  * Para la primera, esta los reversara y lo devolvera en una variable.
  * Para la segunda, esta los reversara pero los devuelve en el misma variable que se le pasas cómo parámetro.
9. Crea un a función que sea capaz de crear listas de objetos especificando el numero mas arriba de la lista. Una lista es un conjunto anidado de objetos, con el primer objeto conteniendo una referencia al segundo, el segundo al tercero, y así sucesivamente. Algo que se vea retornado cómo:  
  lista = {  
    valor: 1,  
    resto : {  
      valor: 2,  
      resto: {  
        valor: 3,  
        resto: null  
      }  
    }  
  }  

10. Crea una función que compare si, dos objetos son iguales y tienen las mismas propiedades, si es asi, retorna true sino, retorna false.  

11. Crea una función que aplane un array de arrays. Por lo que al pasarle un array de arrays, retornara un solo array con todos los elementos de todos los array internos.

12. Función de orden superior que recibe cómo parametros un valor inicial, una función de inicio, una función de actualización, una función de cuerpo, la cual debe actuar cómo un ciclo.

13. El metodo 'every' verifica que todos los elementos de un array cumplan con una condición, contrario al metodo 'some' que devuelve true si al menos un elemento del array cumple la condición, crea una función similar a 'every' utilizando el metodo 'some' y otra utilizando un ciclo, teniendo en cuenta que 'some' es similar al operador 'or' y every al operador 'and'.
