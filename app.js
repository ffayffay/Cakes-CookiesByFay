let cakes = [
	{
		flavor: 'Vanilla with Buttercream'
		,description: 'Light and sweet but moist and rich in flavor, this traditional vanilla cake is filled and frosted with homemade vanilla buttercream.'
		,sixInch: '$30.00'
		,eightInch: '$35.00'
		,tenInch: '$45.00'
		,quarterSheet: '$40.00'
		,halfSheet: '$60.00'
		,fullSheet: '$85.00'
	},
	{
		flavor: 'Lemon with Lemon Buttercream'
		,description: 'Made with real lemons, this rich and fluffy cake is topped with fresh homemade lemon zest buttercream.'
		,sixInch: '$30.00'
		,eightInch: '$35.00'
		,tenInch: '$45.00'
		,quarterSheet: '$40.00'
		,halfSheet: '$60.00'
		,fullSheet: '$85.00'
	},
	{
		flavor: 'Chocolate with Chocolate Buttercream'
		,description: 'A rich, dense, moist chocolate cake topped with homemade fudgey chocolate buttercream.'
		,sixInch: '$35.00'
		,eightInch: '$40.00'
		,tenInch: '$50.00'
		,quarterSheet: '$45.00'
		,halfSheet: '$67.50'
		,fullSheet: '$110.00'
	},
	{
		flavor: 'Strawbery with Strawbery Buttercream'
		,description: 'Made with real strawberries, this pretty pink cake is filled and frosted with fresh homemade strawberry buttercream.'
		,sixInch: '$35.00'
		,eightInch: '$40.00'
		,tenInch: '$50.00'
		,quarterSheet: '$45.00'
		,halfSheet: '$67.50'
		,fullSheet: '$110.00'
	},
	{
		flavor: 'Carrot Cake with Cream Cheese Buttercream'
		,description: 'Dense, moist and perfectly spiced carrot cake made with real carrots, pineapple, and walnuts, filled and frosted with homemade traditional cream cheese buttercream.'
		,sixInch: '$30.00'
		,eightInch: '$35.00'
		,tenInch: '$50.00'
		,quarterSheet: '$40.00'
		,halfSheet: '$60.00'
		,fullSheet: '$90.00'
	},
];

let menuWrap = document.querySelector('.menuWrap');

function createHtmlTemplate(array) {
	let template = `
		<div class="column flavorCont">
			<div class="flavor-title">
				<h1 class="title is-5">${array.flavor}</h1>
			</div>
			<div class="description-wrap">
				<p>${array.description}</p>
			</div>
			<div class"size-wrap">
				<ul>
					<li>Two Layer 6" Round <span>(serves 8-12)</span> ........${array.sixInch}</li>
					<li>Two Layer 8" Round <span>(serves 15-20)</span> ........${array.eightInch}</li>
					<li>Two Layer 10" Round <span>(serves 24-28)</span> ........${array.tenInch}</li>
					<li>Quarter Sheet <span>(serves 36)</span> ........${array.quarterSheet}</li>
					<li>Half Sheet <span>(serves 54)</span> ........${array.halfSheet}</li>
					<li>Full Sheet <span>(serves 72)</span> ........${array.fullSheet}</li>
				</ul>
			</div>
		</div>
	`
	return template
}

function renderTemplate(array) {
	array.map(array => menuWrap.insertAdjacentHTML("beforeend", createHtmlTemplate(array)))
}

renderTemplate(cakes)