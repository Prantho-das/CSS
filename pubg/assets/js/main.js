const open_item = async () => {
  const audio = new Audio("https://l.top4top.io/m_1725u5z7i1.mp3");
  await audio.play();
};
const close_item = async () => {
  const audio = new Audio("https://a.top4top.io/m_1725zobal2.mp3");
  await audio.play();
};
document.addEventListener("alpine:init", () => {
  Alpine.store("pubg_store", {
    login_open: false,
    facebook_open: false,
    twitter_open: false,
    message: true,
    timer_start: 0,
    cb_data: [
      { id: 1, point: 120 },
      { id: 2, point: 320 },
      { id: 3, point: 90 },
    ],
  });
  Alpine.data("pubg", () => ({
    init() {
      let date = new Date();
      let d = date.toLocaleDateString().split("/");
      d = `${parseInt(d[0])} ${parseInt(d[1]) + 1}, ${parseInt(d[2])}`;
      this.$refs.countdowntime
        ? (this.$refs.countdowntime.innerText = `00:00:00`)
        : "";
      this.$store.pubg_store.timer_start = new Date(`${d} 00:00:00`).getTime();
      this.countdown();
    },
    countdown() {
      var countDownDate = this.$store.pubg_store.timer_start;
      if (!this.$refs.countdowntime) {
        return false;
      }
      const timer = setInterval(() => {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let time = `${hours}:${minutes}:${seconds}`;
        this.$refs.countdowntime.innerText = time;
        if (distance < 0) {
          clearInterval(timer);
          time = `00:00:00`;
          this.$refs.countdowntime.innerText = time;
        }
      }, 1000);
    },
    login_open() {
      window.scrollTo(0, 0);
      this.$store.pubg_store.login_open = true;
      open_item();
    },
    login_close() {
      this.$store.pubg_store.login_open = false;
      close_item();
    },
    facebook_open() {
      this.$store.pubg_store.facebook_open = true;
      open_item();
    },
    facebook_close() {
      this.$store.pubg_store.facebook_open = false;
      close_item();
    },
    twitter_open() {
      this.$store.pubg_store.twitter_open = true;
      open_item();
    },
    twitter_close() {
      this.$store.pubg_store.twitter_open = false;
      close_item();
    },
    message_close() {
      fetch("http://localhost:5000/logout", {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        }
      }).then((res) =>res.json())
      .then((result) => console.log(result))
      .catch((err) => window.location.reload());

      this.$store.pubg_store.message = false;
      close_item();
    },
  }));
});
