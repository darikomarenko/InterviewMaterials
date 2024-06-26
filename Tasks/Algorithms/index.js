<main>
    <h1>Алгоритмы</h1>
<h2>Проверка на палиндром</h2>
<p>
Задача заключается в определении, является ли данная строка палиндромом после удаления неалфавитно-цифровых символов и преобразования всех заглавных букв в строчные.

Для решения задачи мы можем использовать два указателя - один начнет с начала строки, а второй с конца строки. Мы будем сравнивать символы, на которые указывают указатели, и если они не совпадают, то строка не является палиндромом. Если символы совпадают, мы будем продолжать сравнивать символы, двигая оба указателя внутрь строки до тех пор, пока строка не будет полностью просканирована.

Если оба указателя пересекутся или встретятся в середине строки, это означает, что строка является палиндромом.

Однако перед началом сравнения символов необходимо привести строку к нужному формату. Мы превратим все буквы в строчные с помощью функции toLowerCase(), а затем удалим все неалфавитно-цифровые символы с помощью регулярного выражения.

В результате мы вернем true, если строка является палиндромом, и false в противном случае.

Это решение имеет сложность времени O(n), где n - длина строки s.
</p>

function isPalindrome(s) {
  // Приводим строку к нижнему регистру и удаляем все неалфавитно-цифровые символы
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Используем два указателя - один начнет с начала строки, а второй с конца
  let left = 0;
  let right = s.length - 1;

  // Пока указатели не пересекутся или не встретятся в середине строки
  while (left < right) {
    // Если символы не совпадают, строка не является палиндромом
    if (s[left] !== s[right]) {
      return false;
    }
    // Перемещаем указатели внутрь строки
    left++;
    right--;
  }

  // Если вышли из цикла, значит строка является палиндромом
  return true;
}

<h2>Генерация правильно составленных скобок</h2>
<p>Для решения этой задачи мы можем использовать рекурсию. Перебираем все возможные комбинации скобок, начиная с открывающей скобки и в каждом шаге рекурсивно вызываем функцию с уменьшенным значением n и добавленной парой скобок в текущую строку.

При этом нужно учитывать два условия:

Количество открывающих скобок должно быть всегда меньше или равно n.

Количество закрывающих скобок не может превышать количество открывающих скобок.

Также следует отметить, что в самом начале рекурсии строка пустая, так как мы еще не добавили ни одной пары скобок, а в конце рекурсии, когда n станет равно 0, добавляем эту строку в результат.

Таким образом, мы гарантируем, что в результате получим все правильно составленные скобки.

После окончания рекурсии возвращаем список всех комбинаций скобок.
</p>
<p>

function generateParenthesis(n) {
  const result = [];
  
  backtrack('', 0, 0);
  
  return result;
  
  function backtrack(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }
    
    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  }
}

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]</p>

<h2>Алгоритм функции `myAtoi(string s)`</h2>
<p>Алгоритм функции myAtoi выполняет преобразование строки в целое число, с учетом возможного знака и проверки на выход за пределы диапазона знакового 32-битного целого числа.

В начале алгоритма, все ведущие пробелы игнорируются. Затем проверяется следующий символ строки (если он существует) на наличие знака '-' или '+'. Если символ присутствует, он определяет знак результирующего числа (отрицательное для '-' и положительное для '+'). Если символ отсутствует, число считается положительным.

Затем считываются символы до следующего символа, не являющегося цифрой, или до конца строки. Остаток строки игнорируется. Считанные символы преобразуются в целое число. Если не было считано ни одной цифры, возвращается 0. Если в шаге 2 был определен отрицательный знак, число меняется соответственно.

В конце алгоритма проверяется полученное число на выход за пределы знакового 32-битного целого числа [-231, 231 - 1]. В случае, если число выходит за пределы диапазона, оно ограничивается, чтобы оставаться в этом диапазоне. Числа меньше -231 ограничиваются до -231, а числа больше 231 - 1 ограничиваются до 231 - 1.

В итоге, полученное число возвращается как результат выполнения функции.
</p>
<p>

function myAtoi(s) {
    // Шаг 1
    s = s.trim();
    
    // Шаг 2
    let sign = 1;
    let i = 0;
    if (s.charAt(i) === "-" || s.charAt(i) === "+") {
        sign = s.charAt(i) === "-" ? -1 : 1;
        i++;
    }
    
    // Шаг 3
    let num = 0;
    while (i < s.length && s.charAt(i) >= "0" && s.charAt(i) <= "9") {
        num = num * 10 + Number(s.charAt(i));
        i++;
    }
    
    // Шаг 4
    num = num * sign;
    
    // Шаг 5
    const INT_MIN = Math.pow(-2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    if (num < INT_MIN) {
        num = INT_MIN;
    }
    if (num > INT_MAX) {
        num = INT_MAX;
    }
    
    // Шаг 6
    return num;
}

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648</p>
<h2>Самая длинная палиндромная подстрока</h2>
<p>Шаги алгоритма:

Проверяем, не является ли строка пустой. Если да, то сразу возвращаем пустую строку.
Инициализируем переменную longest для хранения самой длинной палиндромной подстроки.
Начинаем итерацию по каждому символу в строке.
Для каждого символа ищем палиндромы с нечетными длинами, центром в текущем символе.
Для каждой пары соседних символов ищем палиндромы с четными длинами, центром между ними.
Выбираем самый длинный палиндром из найденных на шагах 4 и 5.
Обновляем переменную longest, если текущий палиндром длиннее текущего longest.
По завершении итерации возвращаем переменную longest как результат.
Для поиска палиндромов используется функция expandAroundCenter, которая расширяет палиндром влево и вправо от заданных индексов.
Такой алгоритм позволяет найти самую длинную палиндромную подстроку в строке, обходя все возможные варианты расширения палиндрома от центра.
</p>
<p>
    function longestPalindrome(s) {
    // Шаг 1: Проверка на пустую строку
    if (s.length === 0) {
        return "";
    }
    
    let longest = "";
    
    // Шаг 2: Итерация по каждому символу в строке
    for (let i = 0; i < s.length; i++) {
        // Шаг 3: Поиск палиндрома с центром в текущем символе (нечетная длина)
        const palindromeOdd = expandAroundCenter(s, i, i);
        // Шаг 4: Поиск палиндрома с центром между текущим и следующим символом (четная длина)
        const palindromeEven = expandAroundCenter(s, i, i + 1);
        
        // Выбираем самый длинный палиндром из найденных
        const currentLongest = palindromeOdd.length > palindromeEven.length ? palindromeOdd : palindromeEven;
        
        // Обновляем самый длинный палиндром, если текущий длиннее
        if (currentLongest.length > longest.length) {
            longest = currentLongest;
        }
    }
    
    // Шаг 5: Возврат самой длинной палиндромной подстроки
    return longest;
}

function expandAroundCenter(s, left, right) {
    // Шаг 1: Поиск палиндрома с текущими left и right
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    
    // Шаг 2: Возврат найденного палиндрома
    return s.slice(left + 1, right);
}

// Примеры использования:
const s1 = "babad";
console.log(longestPalindrome(s1)); // Вывод: "bab" или "aba"

const s2 = "cbbd";
console.log(longestPalindrome(s2)); // Вывод: "bb"</p>

<h2>Зигзагообразное преобразование</h2>
<p>Дана строка s и число numRows, которое обозначает количество строк в зигзаг-преобразовании. Наша задача - преобразовать строку s в зигзаг-представление и затем прочитать ее построчно.

Преобразование происходит следующим образом:

Строка s разбивается на несколько групп символов, где каждая группа содержит numRows символов. Если длина строки s не кратна numRows, то последняя группа может содержать меньше символов.
Каждая группа символов записывается в отдельную строку. Строки размещаются в виде зигзага: первая строка идет сверху вниз, вторая строка идет по диагонали вверх-вниз, третья строка идет сверху вниз и так далее. Пример:
P   A   H   N
A P L S I I G
Y   I   R
Затем строки считываются построчно, чтобы получить конечную преобразованную строку.
Решение
Один из способов решить эту задачу - использовать список (или массив) списков (или массивов), где каждый вложенный список представляет строку в зигзаг-преобразовании. Мы будем идти по строке s, добавляя каждый символ в соответствующую строку в списке.

Начнем с создания списка строк res, где каждый элемент представляет строку в зигзаг-преобразовании. Длина списка res равна numRows.

Затем мы можем идти по строке s и для каждого символа определить, в какую строку он должен быть добавлен. Мы будем использовать индекс row для отслеживания текущего ряда, который будет изменяться в зависимости от текущего направления движения. Начальное направление движения будет вниз.

Когда row достигает значения numRows-1, мы меняем направление движения на вверх и продолжаем добавлять символы в предыдущие строки до тех пор, пока row не станет равным 0. Затем мы снова меняем направление движения на вниз и продолжаем этот процесс до тех пор, пока не закончится строка s.

Наконец, мы объединяем все строки из списка res в одну строку и возвращаем ее в качестве результата.

Сложность алгоритма
Временная сложность этого решения составляет O(n), где n - количество символов в строке s. Мы проходим по строке s только один раз. Пространственная сложность составляет O(n), так как мы используем дополнительный список для хранения строк в зигзаг-преобразовании.
</p>
<p>

function convert(s, numRows) {
  // Если количество строк равно 1 или строка пустая, то возвращаем исходную строку
  if (numRows === 1 || s.length === 0) {
    return s;
  }
  
  const result = []; // Результирующий массив, в котором будут храниться строки
  const n = s.length; // Длина исходной строки
  
  const cycleLen = 2 * numRows - 2; // Длина одного цикла
  for (let i = 0; i < numRows; i++) { // Итерируемся по каждой строке
    for (let j = 0; j + i < n; j += cycleLen) { // Итерируемся по каждому символу в строке
      result.push(s[j + i]); // Добавляем символ в результирующий массив

      // Если текущая строка не является первой или последней и не выходит за пределы строки
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
        result.push(s[j + cycleLen - i]); // Добавляем символ в результирующий массив
      }
    }
  }
  
  return result.join(""); // Преобразуем массив в строку и возвращаем результат
}
</p>
<h2>Длина самой длинной подстроки</h2>
<p>Задачу можно решить с использованием алгоритма двух указателей (слайдера).

Мы будем использовать два указателя - left и right. Изначально оба указателя указывают на начало строки s.

Затем мы будем двигать указатель right вправо, пока не встретим повторяющийся символ. При каждом сдвиге будем запоминать текущую длину подстроки без повторяющихся символов и обновлять максимальную длину.

Когда right встречает повторяющийся символ, мы сдвигаем указатель left на следующую позицию после повторяющегося символа и продолжаем движение right.

Мы продолжаем этот процесс до тех пор, пока right не достигнет конца строки s. В конце, найденная максимальная длина будет являться ответом.

Например, рассмотрим строку "abcabcbb":

Изначально left=0 и right=0. Длина текущей подстроки без повторений равна 1. Максимальная длина равна 1.
Перемещаем right на 1. Теперь right=1 и символ на этой позиции - "b". Его нет в текущей подстроке без повторений. Длина текущей подстроки без повторений равна 2. Максимальная длина равна 2.
Перемещаем right на 2. Теперь right=2 и символ на этой позиции - "c". Его нет в текущей подстроке без повторений. Длина текущей подстроки без повторений равна 3. Максимальная длина равна 3.
Перемещаем right на 3. Теперь right=3 и символ на этой позиции - "a". Его нет в текущей подстроке без повторений. Длина текущей подстроки без повторений равна 4. Максимальная длина равна 4.
Перемещаем right на 4. Теперь right=4 и символ на этой позиции - "b". Он уже есть в текущей подстроке без повторений. Поэтому мы сдвигаем left на следующую позицию после первого вхождения символа "b" и переходим к шагу 3.
...
Перемещаем right на 8. Теперь right=8 и символ на этой позиции - "b". Он уже есть в текущей подстроке без повторений. Поэтому мы сдвигаем left на следующую позицию после первого вхождения символа "b" и переходим к шагу 3.
...
Таким образом, максимальная длина подстроки без повторений в данной строке равна 3.
</p>
<p>
    function lengthOfLongestSubstring(s) {
  let maxLength = 0; // переменная для хранения длины самой длинной подстроки
  let substring = ''; // переменная для хранения текущей подстроки без повторяющихся символов

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // проверяем, есть ли текущий символ в текущей подстроке
    if (substring.includes(char)) {
      // находим индекс повторяющегося символа в текущей подстроке
      const index = substring.indexOf(char);

      // обновляем текущую подстроку, отсекая все символы до повторяющегося символа
      substring = substring.slice(index + 1);
    }

    // добавляем текущий символ в текущую подстроку
    substring += char;

    // обновляем длину самой длинной подстроки, если текущая подстрока стала длиннее
    maxLength = Math.max(maxLength, substring.length);
  }

  return maxLength;
}

// Примеры использования:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3</p>
<h2>Две суммы</h2>
<p>
Оказывается, мы можем сделать это за один проход. Во время итерации и вставки элементов в хеш-таблицу мы также проверяем, существует ли уже комплимент текущего элемента в хеш-таблице. Если он существует, мы нашли решение и сразу возвращаем индексы.
</p>
<p>
Реализация


twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return null;
}
</p>
</main>