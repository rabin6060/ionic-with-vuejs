import { createStore } from "vuex";


export const store = createStore({
    state(){
        return {
            memories:[
                {
                    id:'1',
                    image:"https://t4.ftcdn.net/jpg/05/57/64/73/360_F_557647395_oI7nIrCOzHQ5FPaCjOpXIQ2WTOyMf2de.jpg",
                    title:"A trip to goa",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea accusamus animi iste minima, unde esse nemo, iure quasi repellat dolores laborum quaerat culpa, ad sapiente. Quaerat aspernatur numquam atque!"
                },
                {
                    id:'2',
                    image:"https://media.gettyimages.com/id/6410-001185/photo/baby-smiling.jpg?s=612x612&w=0&k=20&c=AP00QqhZIDLN-YPspIt0M9VafmQ_p5M0aN8aIhm9c44=",
                    title:"Childhood Photos",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea accusamus animi iste minima, unde esse nemo, iure quasi repellat dolores laborum quaerat culpa, ad sapiente. Quaerat aspernatur numquam atque!"
                },
                {
                    id:'3',
                    image:"https://media.istockphoto.com/id/114854705/photo/two-men-riding-motorcycles-along-road.jpg?s=612x612&w=0&k=20&c=63icL7Yfa_GD9Q2fxZg5QO68phkbHnAiXNItluLOED4=",
                    title:"My new bike",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea accusamus animi iste minima, unde esse nemo, iure quasi repellat dolores laborum quaerat culpa, ad sapiente. Quaerat aspernatur numquam atque!"
                },
                {
                    id:'4',
                    image:"https://media.istockphoto.com/id/531253600/photo/sunrise.jpg?s=612x612&w=0&k=20&c=gdlZaKWcTjW1hmTRN8veqYIV25O4OfN4MhNx2H5Rgnk=",
                    title:"Watching the sunrise at Nagarkot",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea accusamus animi iste minima, unde esse nemo, iure quasi repellat dolores laborum quaerat culpa, ad sapiente. Quaerat aspernatur numquam atque!"
                }
            ]
        }
    },
    mutations:{
        addMemory(state,memoryData){
            const newMemory = {
                id : new Date().toISOString(),
                title:memoryData.title,
                image:memoryData.image,
                desc:memoryData.desc
            }
            state.memories.unshift(newMemory)
        }
    },
    actions:{
        addMemory(context,memoryData){
            context.commit('addMemory',memoryData)
        }
    },
    getters:{
        memories(state){
            return state.memories
        },
        memory(state){
            return (currentId)=>{
                return state.memories.find(memory=>memory.id===currentId)
            }
        }
    }
})