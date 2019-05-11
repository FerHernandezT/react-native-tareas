import {StyleSheet, Platform, Dimensions} from 'react-native';
const window = Dimensions.get('window');

const styles = StyleSheet.create({
    //tintColor
    imgContainer:{
    width: window.width,
    height: window.height
    },
    //IMAGE_BACKGROUND
    container_image:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    inputMedio:{
        alignItems:'flex-end',
        textAlign:'right',
        //color: ConfiguracionApp.SECOND_COLOR,
        width : (window.width / 2) - 20,
    },
    contInput:{
        flex:0,
        width : 40,
    },
    inputCorto:{
        /*alignItems:'flex-end',*/
        fontSize: ConfiguracionApp.TEXT_SIZE - 1,
        textAlign:'right',
        width : 37,
    },

    defaultList:{
        minHeight:200,
    },

    container:{
        flex: 1,
        padding:15,
    },

    bgdefaul:{
        backgroundColor: ConfiguracionApp.VIEW_COLOR
    },
    bgPrimary:{
        backgroundColor: ConfiguracionApp.PRIMARY_COLOR
    },
    bgDarkPrimary:{
        backgroundColor: ConfiguracionApp.DARK_PRIMARY_COLOR
    },
    bgRed:{
        backgroundColor:'#FA3A3A'
    },
    bgWhite:{
        backgroundColor:'#FFF'
    },

    bgTranparent:{
        backgroundColor: 'rgba(255, 255, 255, .5)',
    },
    bgTrasluce:{
        backgroundColor: 'rgba(29, 82, 50, .8)',
    },

    colordefaul:{
        color: ConfiguracionApp.VIEW_COLOR
    },
    colorPrimary:{
        color: ConfiguracionApp.PRIMARY_COLOR
    },
    colorText:{
        color: ConfiguracionApp.TEXT_COLOR,
    },
    colorSecondColor:{
        color: ConfiguracionApp.SECOND_COLOR
    },
    colorWhite:{
        color: 'white'
    },
    colorRed:{
        color: 'red'
    },

    icono:{
        width: ConfiguracionApp.SIZE_ICON,
        height: ConfiguracionApp.SIZE_ICON,
    },
    tintIconWhite:{
        tintColor:'white'
    },
    tintIcon:{
        tintColor:ConfiguracionApp.PRIMARY_COLOR
    },
    tintIconOpaco:{
        tintColor:'#777'
    },

    iconReset:{
        marginRight: 0,
        marginLeft: 0,
        /*paddingLeft:0,
        paddingRight:0,*/
    },


    marRight:{
        marginRight: 15,
    },
    mgv_40:{
        marginVertical:40
    },
    mgv_30:{
        marginVertical:30
    },
    mgv_20:{
        marginVertical:20
    },
    mgv_10:{
        marginVertical:10
    },


    mgh_30:{
        marginHorizontal:30
    },
    mgh_20:{
        marginHorizontal:20
    },
    mgh_10:{
        marginHorizontal:10
    },


    pgv_15:{
        paddingVertical:15
    },
    pgv_20:{
        paddingVertical:20
    },

    pgh_20:{
        paddingHorizontal:20
    },
    pgh_15:{
        paddingHorizontal:15
    },
    pgh_10:{
        paddingHorizontal:10
    },

    pgt_15:{
        paddingTop: 15,
    },

    padding_15:{
        padding:15
    },
    padding_8:{
        padding:8
    },

    modal:{
        width: window.width - 40,
    },


    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    end:{
        justifyContent:'center',
        alignItems:'flex-end'
    },
    between:{
        justifyContent:'space-between',
        alignItems:'center',
    },
    around:{
        justifyContent:'space-around',
        alignItems:'center',
    },




    row:{
        flexDirection:'row'
    },
    itemCenter:{
        alignItems: 'center'
    },


    contBtnIcon:{
        backgroundColor:ConfiguracionApp.PRIMARY_COLOR,
        width: ConfiguracionApp.BTN_ICON,
        height: ConfiguracionApp.BTN_ICON,
        borderRadius: ConfiguracionApp.BTN_ICON / 2,
        justifyContent:'center',
        alignItems:'center',
    },


    contBtnCamera:{
        height:120,
        width:120,
        borderRadius:60,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    imagen:{
        height:120,
        width:120,
        borderRadius:60,
    },
    contBtnCameraSquare:{
        height:110,
        width:150,
        borderRadius:2,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    imagenSquare:{
        height:110,
        width:150,
        borderRadius:2,
    },


    ///////////////////////////////////////////////////////////////
    ////TEXT
    ///////////////////////////////////////////////////////////////

    emegencia:{
        color: ConfiguracionApp.SECOND_COLOR,
        fontSize: ConfiguracionApp.TEXT_SIZE + 10,
    },

    textTitle:{
        color: ConfiguracionApp.TEXT_COLOR,
        fontSize: ConfiguracionApp.TEXT_SIZE + 4,
    },

    textMedio:{
        color: ConfiguracionApp.SECOND_COLOR,
        fontSize: ConfiguracionApp.TEXT_SIZE + 1,
    },
    textMedio2:{
        color: ConfiguracionApp.SECOND_COLOR,
        fontSize: ConfiguracionApp.TEXT_SIZE - 1,
    },
    textSmall:{
        color: ConfiguracionApp.SECOND_COLOR,
        fontSize: ConfiguracionApp.TEXT_SIZE - 3,
    },

    textStyle:{
        color: ConfiguracionApp.TEXT_COLOR,
        fontSize: ConfiguracionApp.TEXT_SIZE
    },
    textcenter:{
        textAlign:'center',
    },

    textunderline:{
        textDecorationLine:'underline',
    },

    textWeight:{
        fontWeight:'700',
    },

    ///////////////////////////////////////////////////////////////
    ////LOGIN
    ///////////////////////////////////////////////////////////////

    imgLogo:{
        resizeMode: 'contain',
        width: ConfiguracionApp.LOGO.SIZE * 2,
        //height: ConfiguracionApp.LOGO.SIZE * 2,
        //borderRadius: ConfiguracionApp.LOGO.SIZE,
    },

    colorLight:{
        color: ConfiguracionApp.LIGHT_PRIMARY_COLOR
    },

    headerShadow:{
        backgroundColor:'#FFF',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
    },

    btnLogin:{
        backgroundColor:'#FFF',
        //width: window.width / 2,
        borderRadius: 5,
        padding:10,
        paddingHorizontal:20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
    },

    btnLoginInverse:{
        backgroundColor:ConfiguracionApp.PRIMARY_COLOR,
        borderRadius: 5,
        padding:10,
        paddingHorizontal:20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
    },

    radiusButon:{
        backgroundColor:ConfiguracionApp.PRIMARY_COLOR,
        justifyContent:'center',
        alignItems:'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: -5 },
        shadowOpacity: 1.0,
        shadowRadius: 5,
        elevation: 15,
    },
    radiusActivo:{
        backgroundColor:ConfiguracionApp.ACCENT_COLOR,
    },

    ///////////////////////////////////////////////////////////////
    ////HEADER
    ///////////////////////////////////////////////////////////////

    icon: {
        height: ConfiguracionApp.SIZE_ICON,
        width: ConfiguracionApp.SIZE_ICON
    },
    icon_mediano: {
        height: ConfiguracionApp.SIZE_ICON + 10,
        width: ConfiguracionApp.SIZE_ICON + 10
    },
    text_mid: {
        fontSize: ConfiguracionApp.HEADER.TEXT_SIZE,
        color: ConfiguracionApp.HEADER.TEXT_COLOR,
        fontWeight:'600',
    },
    defaul:{
        flex:0,
        height:ConfiguracionApp.SIZE_ICON,
        width:ConfiguracionApp.SIZE_ICON
    },

    iconColor : {
    color:ConfiguracionApp.PRIMARY_COLOR
    },

    ///////////////////////////////////////////////////////////////
    ////FOOTER
    ///////////////////////////////////////////////////////////////

    footer:{
        flex:0,
        flexDirection: 'row',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:ConfiguracionApp.DARK_PRIMARY_COLOR,
    },

    ///////////////////////////////////////////////////////////////
    ////BUTON
    ///////////////////////////////////////////////////////////////

    modalSelector:{
        marginVertical:10,
        width: window.width - 30,
    },

    modalSelectorEnd:{
        width: (window.width / 2) - 15,
    },

    btnBorderLeft:{
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        padding:10,
        width: (window.width / 2) - 15,
        backgroundColor: ConfiguracionApp.PRIMARY_COLOR
    },
    btnBorderRight:{
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        padding:10,
        width: (window.width / 2) - 15,
        backgroundColor: ConfiguracionApp.PRIMARY_COLOR
    },

    radioOff:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'#F7F7F7'
    },
    radioOn:{
        width:20,
        height:20,
        borderRadius:10,
        borderWidth:6,
        borderColor: ConfiguracionApp.PRIMARY_COLOR,
        backgroundColor:'white'
    },
    contBuscar:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        backgroundColor:'white'
    },
    inpBuscar:{
        height: 30,
        textAlign:'center',
        width: window.width - 50,
        paddingBottom:0,
        paddingTop:0,
    },
    iconRight:{
        position:'absolute',
        right:0,
        bottom:20,
        padding:5,
        width:40,
        height:40,
        //backgroundColor:'#CCC',
    },



    ///////////////////////////////////////////////////////////////
    ////CUSTOM
    ///////////////////////////////////////////////////////////////
    linea:{
        marginHorizontal:5,
        paddingVertical:4,
        borderBottomWidth:1,
        borderBottomColor: ConfiguracionApp.TEXT_COLOR
    },

    contZarpe:{
        backgroundColor:'white',
        marginTop:80,
        marginBottom:40,
    },
    contTripulante:{
        backgroundColor:'white',
        marginTop:40,
    },
    
    contDesembarque:{
        backgroundColor:'white',
        marginTop:5,
        paddingVertical:20,
    },
    desembarque:{
        paddingVertical:10,
        justifyContent:'space-between',
        borderWidth: 1,
        borderColor: ConfiguracionApp.SECOND_COLOR,
        borderLeftWidth:0,
        borderRightWidth: 0,
    },
    rowDesembarque:{
        paddingVertical:22,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor: '#F3F3F3',
        borderBottomWidth:0.5,
        backgroundColor:'white'
    },
    rowEmbarcacion:{
        paddingVertical:20,
        paddingHorizontal:15,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor: '#F3F3F3',
        borderBottomWidth:0.5,
        backgroundColor:'white'
    },
    rowFaena:{
        paddingVertical:20,
        paddingLeft:15,
        paddingRight:40,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor: '#F3F3F3',
        borderBottomWidth:0.5,
        backgroundColor:'white'
    },
    rowFaenaNP:{
        paddingVertical:20,
        paddingHorizontal:15,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor: '#F3F3F3',
        borderBottomWidth:0.5,
        backgroundColor:'white'
    },
    rowEmbarcaciones:{
        marginTop:2,
    },
    mediaScreen:{
        width: (window.width / 2) - 30,
    },
    mediaScreen2:{
        width: (window.width / 2) + 100,
    },
    mediaScreen6:{
        width: (window.width / 2) - 60,
    },
    screenM100:{
        width: window.width - 100,
    }


});

module.exports = styles;
