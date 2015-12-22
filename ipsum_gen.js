var Ipsum = {
  words: ['wub', 'buzz', 'whoomp', 'bzzt', 'gleep', 'worp', 'beep', 'zzz', 'glomp'],
  get_words: function() {
    // Our minimum words array will be sentence length, let's say 7-10 words. 
    var length = (Math.random() * 4) + 6;
    var retarr = [];
    var words_available = this.words.length;
    var word = '';
    for(var i=0; i < length; i++) {
      word = this.words[Math.floor(Math.random() * words_available)];
      // WubWubWub...
      if ((Math.random() * 10) > 9) { word = word + word + word; }
      retarr.push(word);
    }
    return retarr;
  },
  make_a_sentence: function() {
    var words = this.get_words();
    // Let's capitalize the first word
    words[0] = words[0].replace(/^[a-z]/, function(l) { return l.toUpperCase(); });
    // Now join our words to make our sentence. 
    return words.join(' ') + '.';
  },
  make_a_paragraph: function() {
    // A paragraph will be between 4 & 6 sentences. 
    var length = (Math.random() * 3) + 3;
    var retval = [];
    for(var i=0; i < length; i++) {
      retval.push(this.make_a_sentence());
    }
    return retval.join(' ');
  },
  make_paragraphs: function(num) {
    // We'll default to 5 paragraphs if not given a number.
    var length = num || 5;
    var retarr = [];
    for (var i = 0; i < length; i++) {
      retarr.push(this.make_a_paragraph());
    }
    return retarr.join("\n\n");
  }

}

var exports = module.exports = Ipsum;
