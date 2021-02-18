import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../../const/colors'
import { PrimaryButton } from '../components/Button';



const OnBoardScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.SafeArea} >
            <View style={styles.ViewStyle}>
                <Image
                    style={styles.ViewImage}
                    source={require('../../assets/onboardImage.png')}
                />

            </View>
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.food}>
                        Delicious Food
                    </Text>
                    <Text style={styles.note}>
                        We help you find best and delicious food
                    </Text>
                </View>
                <View style={styles.indicatorContainer}>
                    <View style={styles.currentIndicator} />
                    <View style={styles.indicator} />
                    <View style={styles.indicator} />
                </View>
                <PrimaryButton
                    onPress={() => navigation.navigate('Home')}
                    title="Get Started"
                />
            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    ViewStyle: { height: 400 },
    ViewImage: {

        width: '100%',
        resizeMode: 'contain',
        top: -150,
    },
    food: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    note: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        color: COLORS.grey,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentIndicator: {
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,
    },
    indicator: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
    },




})

export default OnBoardScreen;
