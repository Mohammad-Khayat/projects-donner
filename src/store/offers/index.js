export default{
    state:{
        offers:[
            {message:'Hello Im a good dev',user:'Mohammad',finishTime:'4 hours'}

            
        ]
    },
    actions:{
        add_offer({commit},offer){
            commit('Set_Offer',offer)
        },
        get_offers(){},
    },
    mutations:{
        Set_Offer(state,offer){
            state.offers.push(offer)
        }
    }
}