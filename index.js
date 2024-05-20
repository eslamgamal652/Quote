
const arrayOfQuotes = [
  {'author': 'Oscar Wilde   ', 
   'quote': '“Be yourself; everyone else is already taken.'
  },
  {'author': '  farank zapa  ', 
   'quote': ' “So many books, so little time.”     '
  },
  {'author': '   Marcus Tullius Cicero', 
   'quote': '  “A room without books is like a body without a soul.”'
  },
  {'author': 'mae west ', 
   'quote': '   “You only live once, but if you do it right, once is enough.” '
  },
  {'author': ' Mahatma Gandhi', 
   'quote': '“Be the change that you wish to see in the world.”'
  },
  {'author': '― Elbert Hubbard', 
   'quote': '“A friend is someone who knows all about you and still loves you.”'
  },
];

function generateQuote(){
  const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
  document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
  document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
  
}
