const coinId = document.querySelector(".coin-name")
const coinRank = document.querySelector(".coin-rank")
const coinSymbol = document.querySelector(".coin-symbol")
const inputFeild = document.querySelector("#search")
const btn = document.querySelector('#btn')

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const res = await axios.get("https://api.coincap.io/v2/assets");

        coinId.innerHTML = res.data.data[inputFeild.value].name
        coinRank.innerHTML = res.data.data[inputFeild.value].rank
        coinSymbol.innerHTML = res.data.data[inputFeild.value].symbol

    inputFeild.value = "";
})