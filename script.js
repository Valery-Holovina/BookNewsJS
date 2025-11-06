
//2--------------
// class NewsFeed {
//   constructor() {
//     this.news = []; 
//   }

//   // Getter that returns the number of news items
//   get count() {
//     return this.news.length;
//   }

//   // Method to add a news item
//   addNews(title, content, date, tags = []) {
//     this.news.push({ title, content, date: new Date(date), tags });
//   }

//   // Method to remove a news item by title
//   removeNews(title) {
//     this.news = this.news.filter(news => news.title !== title);
//   }

//   // Method to display all news
//   showAll() {
//     console.log("=== All News ===");
//     this.news.forEach((n, i) => {
//       console.log(`${i + 1}. ${n.title} (${n.date.toLocaleDateString()})`);
//       console.log(`   ${n.content}`);
//       console.log(`   Tags: ${n.tags.join(", ")}\n`);
//     });
//   }

//   // Method to sort news by date (latest first)
//   sortByDate() {
//     this.news.sort((a, b) => b.date - a.date);
//   }

//   // Method to find news by tag
//   findByTag(tag) {
//     return this.news.filter(n => n.tags.includes(tag));
//   }
// }


// const feed = new NewsFeed();

// feed.addNews(
//   "The Cruel Prince Adaptation Announced",
//   "Fans of Holly Black’s 'The Cruel Prince' are thrilled — a film adaptation is finally in production, promising a dark and enchanting journey into Elfhame.",
//   "2025-10-20",
//   ["fantasy", "books", "adaptation"]
// );

// feed.addNews(
//   "Caraval Universe Expands",
//   "Stephanie Garber revealed that a new spin-off set in the magical world of 'Caraval' is coming next summer, featuring a mysterious new protagonist.",
//   "2025-11-03",
//   ["fantasy", "romance", "new release"]
// );

// feed.addNews(
//   "Shatter Me Series Finale Rumors",
//   "Readers speculate about Tahereh Mafi’s next move after the 'Shatter Me' series — could there be another sequel or even a prequel in the works?",
//   "2025-09-15",
//   ["dystopia", "romance", "books"]
// );


// console.log("Number of news:", feed.count);
// feed.showAll();

// console.log("=== Sort by date ===");
// feed.sortByDate();
// feed.showAll();

// console.log("=== Search by tag 'fantasy' ===");
// const fantasyNews = feed.findByTag("fantasy");
// console.log(fantasyNews);

// console.log("=== Remove news 'Shatter Me Series Finale Rumors' ===");
// feed.removeNews("Shatter Me Series Finale Rumors");
// feed.showAll();
// console.log("Number of news after removal:", feed.count);









//1---------------
class News {
  constructor(title, text, tags, date) {
    this.title = title;
    this.text = text;
    this.tags = tags;
    this.date = new Date(date);
  }

  
  getFormattedDate() {
    const now = new Date();
    const diffMs = now - this.date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMs < 24 * 60 * 60 * 1000) {
      return "today";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      const day = String(this.date.getDate()).padStart(2, "0");
      const month = String(this.date.getMonth() + 1).padStart(2, "0");
      const year = this.date.getFullYear();
      return `${day}.${month}.${year}`;
    }
  }


  print() {
    console.log(this.title);
    console.log(this.getFormattedDate());
    console.log(this.text);
    console.log(this.tags.map(tag => `#${tag}`).join(" "));
    console.log("\n");
  }
}


const news1 = new News(
  "The Cruel Prince Adaptation Announced",
  "Fans of Holly Black’s 'The Cruel Prince' are thrilled — a film adaptation is finally in production, promising a dark and enchanting journey into Elfhame.",
  ["fantasy", "books", "adaptation"],
  "2025-11-05"
);

const news2 = new News(
  "Caraval Universe Expands",
  "Stephanie Garber revealed that a new spin-off set in the magical world of 'Caraval' is coming next summer, featuring a mysterious new protagonist.",
  ["fantasy", "romance", "new release"],
  "2025-11-01"
);

const news3 = new News(
  "Shatter Me Series Finale Rumors",
  "Readers speculate about Tahereh Mafi’s next move after the 'Shatter Me' series — could there be another sequel or even a prequel in the works?",
  ["dystopia", "romance", "books"],
  "2025-09-15"
);


news1.print();
news2.print();
news3.print();
