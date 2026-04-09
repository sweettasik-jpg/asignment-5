console.log('Home Page is coming soon!');


const counts = document.getElementById('count')

const allButton = document.getElementById('all-button')
const openButton = document.getElementById('open-button')
const closedButton = document.getElementById('closed-button')
let cards;

allButton.addEventListener('click',()=>{
    changeTab('');
})
openButton.addEventListener('click',()=>{
    changeTab('open');
})
closedButton.addEventListener('click',()=>{
    changeTab('closed');
})

const loadDatas = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
        .then((response) => response.json())
        .then((json) => {displayData(json.data);
            cards = json.data
        });

};       
    

    const displayData  = (datas) => {
       console.log(datas);
       counts.innerText=datas.length
        const dataContainer = document.getElementById("data-container");
        dataContainer.innerHTML = "";

        for (let data of datas ) {
            const dataCard = document.createElement("div");
            dataCard.innerHTML = `  <div onclick="dtail_modal.showModal()" class="card h-full space-y-3 rounded-md p-4 bg-white mt-4       border-t-4 ${data.status==='open'? 'border-green-600' : 'border-purple-600'} ">
                     <div class="flex items-center justify-between gap-2">
                         <img src="./assets/Open-Status.png" alt="">
                         <button class="btn btn-soft w-[90px] h-[24px] rounded-full bg-red-100 text-red-500">${data.priority}</button>
                     </div>
                     <h3 class="text-lg font-semibold ">${data.title}</h3>
                     <p class="text-[#64748B] font-[/12px]">${data.description}</p>
 
                     <div class="flex items-center justify-between gap-2  mb-1">
                         ${data.labels.map(label => `<span class="btn btn-  rounded-full h-[24px]  bg-red-100 text-red-500"> 
                         <img src="./assets/BugDroid.png" alt=""/> ${label}
                         </span>`
                         ).join('')}

                     </div>
                     
                     <hr style="color: #cbd5e1;  margin-top: 10px;">
 
                     <div class="mt-6 text-[#64748B]" >
                         <span class="block"> #${data.id} by ${data.author}</span>
                         ${data.updatedAt}

                     </div>
                     
                 </div>`;
            dataContainer.append(dataCard);
            
        };
            
    };

    const changeTab=(status) => {
        if(status=='') return displayData(cards)
        displayData(cards.filter(card=>card.status===status))

    }




 


    loadDatas();