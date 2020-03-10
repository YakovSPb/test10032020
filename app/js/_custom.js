 document.addEventListener("DOMContentLoaded", function() {
var json = require('../json/salon.json');
console.log(json)

new Vue({
  el: '#app',
  data() {
  	return{
  		post:{
  			name: '',
  			phone: '',
  			salon: '',
  			master: '',
  			date: '',
  			time: ''
  		},
  		locations: [],
  		times: [],
  		masters: []
  	}
  },
  methods: {
  	onSubmit () {
  		alert(`
  			Получены данные:
  			Имя: ${this.post.name}
  			Телефон: ${this.post.phone}
  			Id салона: ${this.post.salon}
  			Id мастера: ${this.post.master}
  			Дата: ${this.post.date}
  			Время: ${this.post.time}
  			`)
  	},
  	setDobValue(value){
  		this.post.date = value
  	}
  },
  mounted(){
  	$('#calendar').datepicker({
  		onSelect: this.setDobValue
  	})
  },

  async created(){
  	try {
  		const sitePath = "http://localhost:3000/"
  		const res = await axios.get(sitePath + 'json/salon.json')
  		const res2 = await axios.get(sitePath + 'json/gettimetable.json')
  		const res3 = await axios.get(sitePath + 'json/workers.json')
  		this.locations = res.data
  		this.times = res2.data
  		this.masters = res3.data
  	} catch(e){
  		console.error(e)
  	}
  }

})

// datapicker

$(function(){
	$('#calendar').datepicker()
})

})

