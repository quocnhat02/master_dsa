// check

class TfIdfSearch {
  constructor(documents) {
    this.documents = documents.map((doc) => ({
      ...doc,
      words: this.splitVietnameseWords(doc.name),
    }));
    this.totalDocuments = documents.length;
  }

  weights(searchTerm) {
    // console.log(this.documents);
    const terms = this.splitVietnameseWords(searchTerm);
    let results = [];

    for (let i = 0; i < this.documents.length; i++) {
      let doc = this.documents[i];
      let tfidfSum = 0;

      for (let j = 0; j < terms.length; j++) {
        let term = terms[j];
        let tf = this.tf(doc.words, term);
        let idf = this.idf(term);

        if (!isNaN(tf) && !isNaN(idf)) {
          tfidfSum += tf * idf;
        }
      }

      results.push({ weight: tfidfSum, doc });
    }

    return results.sort((a, b) => b.weight - a.weight);
  }

  tf(words, term) {
    if (Array.isArray(words)) {
      let result = 0;

      for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (this.containsVietnameseTerm(word, term)) {
          result = result + 1;
        }
      }

      return result / words.length;
    } else if (typeof words === 'string') {
      return this.containsVietnameseTerm(words, term) ? 1 : 0;
    }

    return 0;
  }

  idf(term) {
    let occurrence = 0;

    for (let j = 0; j < this.documents.length; j++) {
      let doc = this.documents[j];

      if (this.containsVietnameseTerm(doc.words, term)) {
        occurrence = occurrence + 1;
      }
    }

    if (occurrence === 0) {
      return 0;
    }

    return Math.log(this.totalDocuments / occurrence);
  }

  containsVietnameseTerm(words, term) {
    const normalizedTerm = this.normalizeVietnameseTerm(term);

    if (Array.isArray(words)) {
      return words.some((word) =>
        this.normalizeVietnameseTerm(word).includes(normalizedTerm)
      );
    } else if (typeof words === 'string') {
      return this.normalizeVietnameseTerm(words).includes(normalizedTerm);
    }

    return false;
  }

  normalizeVietnameseTerm(term) {
    return term
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  splitVietnameseWords(text) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .split(/\s+/)
      .map((word) => {
        return word
          .split('')
          .map((char) => this.convertVietnameseCharacters(char))
          .join('');
      });
  }

  convertVietnameseCharacters(char) {
    const characterMap = {
      đ: 'd',
      Đ: 'D',
      ấ: 'a',
      ầ: 'a',
      ẩ: 'a',
      ẫ: 'a',
      ậ: 'a',
      ắ: 'a',
      ằ: 'a',
      ẳ: 'a',
      ẵ: 'a',
      ặ: 'a',
      â: 'a',
      Â: 'A',
      é: 'e',
      è: 'e',
      ẻ: 'e',
      ẽ: 'e',
      ẹ: 'e',
      ế: 'e',
      ề: 'e',
      ể: 'e',
      ễ: 'e',
      ệ: 'e',
      ê: 'e',
      Ê: 'E',
      ó: 'o',
      ò: 'o',
      ỏ: 'o',
      õ: 'o',
      ọ: 'o',
      ố: 'o',
      ồ: 'o',
      ổ: 'o',
      ỗ: 'o',
      ộ: 'o',
      ớ: 'o',
      ờ: 'o',
      ở: 'o',
      ỡ: 'o',
      ợ: 'o',
      ô: 'o',
      Ô: 'O',
      ố: 'o',
      ồ: 'o',
      ổ: 'o',
      ỗ: 'o',
      ộ: 'o',
      ớ: 'o',
      ờ: 'o',
      ở: 'o',
      ỡ: 'o',
      ợ: 'o',
      ú: 'u',
      ù: 'u',
      ủ: 'u',
      ũ: 'u',
      ụ: 'u',
      ứ: 'u',
      ừ: 'u',
      ử: 'u',
      ữ: 'u',
      ự: 'u',
      ư: 'u',
      Ư: 'U',
      í: 'i',
      ì: 'i',
      ỉ: 'i',
      ĩ: 'i',
      ị: 'i',
      ý: 'y',
      ỳ: 'y',
      ỷ: 'y',
      ỹ: 'y',
      ỵ: 'y',
    };

    return characterMap[char] || char;
  }
}

const arr = [
  { id: 1, name: 'Nhật Nguyễn', year: '2023' },
  { id: 2, name: 'Tuấn Hà', year: '2024' },
  { id: 3, name: 'Đan Trường', year: '2025' },
  { id: 4, name: 'Khánh Vy', year: '2020' },
  { id: 5, name: 'Trường Giang', year: '2017' },
  { id: 6, name: 'Tiến Lợi', year: '2010' },
  { id: 7, name: 'Đức Duy', year: '2008' },
  { id: 8, name: 'Thành Công', year: '2017' },
  { id: 9, name: 'Thành Long', year: '2015' },
  { id: 10, name: 'Thiện Tâm', year: '2011' },
  { id: 11, name: 'Võ Lâm', year: '2005' },
];

const tfIdfSearch = new TfIdfSearch(arr);

const searchTerm = 'nhats';
const searchResults = tfIdfSearch.weights(searchTerm);

const filteredResults = searchResults.filter((result) => result.weight > 0);

console.log(filteredResults);
