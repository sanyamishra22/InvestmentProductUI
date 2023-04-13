import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../theme/Colors';
import {LANGUAGE} from '../../utlis/constants/LanguageConstant';
import {
  INVALID,
  RIGHT_AWWOR,
  UP_WARD,
} from '../../utlis/constants/ImageConstants';
import {hp, wp} from '../../utlis/helper';
import Card from '../../components/molecule/cards/Card';
import * as Progress from 'react-native-progress';

import StandardButton from '../../components/atoms/button/StandardButton';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useAppSelector} from '../../store/storeHooks';
import {useDispatch} from 'react-redux';
import {FETCH_INVESTMENT_PRODUCT} from './redux/InvestmentAction';

const InvestmentProductUI = () => {
  const dispatch = useDispatch();
  const _handleButtonNext = () => {
    console.log('navigate to next screen');
  };
  const {ListOfInvestments} = useAppSelector(({Investment}) => Investment);

  useEffect(() => {
    //we can dispatch action from here
    const payload = {
      //we can write the required payload here
    };
    dispatch({type: FETCH_INVESTMENT_PRODUCT, payload});
  }, []);

  const _renderFooter = () => {
    return (
      <View>
        <StandardButton
          title={LANGUAGE.Next}
          handleButtonPress={_handleButtonNext}
        />
      </View>
    );
  };
  const _renderHeader = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <Pressable style={styles.individualInvesterButtonContainer}>
            <Text style={styles.indivialInvesterText}>
              {LANGUAGE.IndividualInvester}
            </Text>
          </Pressable>
          <View style={styles.headerRightTextContainer}>
            <Text style={styles.indivialDetailText}>
              {LANGUAGE.InvestmentDetails}
            </Text>
            <Image
              source={RIGHT_AWWOR}
              style={styles.image}
              resizeMode={'cover'}
            />
          </View>
        </View>
        <Card containerStyle={styles.investmentMainContainer}>
          <View style={styles.investmentCardContainer}>
            <View style={styles.moneyContainer}>
              <Text style={styles.moneyText}>{LANGUAGE.MONEY}</Text>
            </View>
            <View style={styles.investmentDetailsContainer}>
              <Text style={styles.instrumentText}>{LANGUAGE.INSTRUMENT}</Text>
              <Text style={styles.fetchChapterText}>
                {LANGUAGE.fetchChapterInvestment}
              </Text>
            </View>
          </View>
          <View style={styles.subSectionContainer}>
            <Text style={styles.urbanText}>{LANGUAGE.urbonDistritor}</Text>
            <Text style={styles.capitalText}>{LANGUAGE.capitalFinancing}</Text>
            <Text style={styles.sukukText}>{LANGUAGE.sukukMurabaha}</Text>
          </View>

          <Text style={styles.amountText}>{LANGUAGE.AMOUNT}</Text>
          <View style={styles.percentageMainContainer}>
            <View style={styles.percentageContainer}>
              <Image
                source={UP_WARD}
                style={styles.upwardIcon}
                resizeMode={'cover'}
              />
              <Text style={styles.percentageText}>75.50%</Text>
            </View>
            <Text style={styles.sizeInvestmentText}>
              {LANGUAGE.SizeOfInvestmentProgram}
            </Text>
          </View>
          <Progress.Bar
            progress={0.7}
            width={322}
            height={10}
            borderColor={COLORS.WHITE}
            color={COLORS.PRIMARY}
            unfilledColor={COLORS.LIGHT_MEDIUM_GREY}
            indeterminateAnimationDuration={1000}
          />
          <View style={styles.dateMainContainer}>
            <View style={styles.dateSemiContainer}>
              <Text style={styles.dateTitleText}>
                {LANGUAGE.EntilementData}
              </Text>
              <Text style={styles.dateTitleText}>12/10/2025</Text>
            </View>
            <View style={styles.dateSemiContainer}>
              <Text style={styles.dateTitleText}>
                {LANGUAGE.EntilementData}
              </Text>
              <Text style={styles.dateTitleText}>12/10/2025</Text>
            </View>
            <View style={styles.dateSemiContainer2}>
              <Text style={styles.dateTitleText}>
                {LANGUAGE.EntilementData}
              </Text>
              <Text style={styles.dateTitleText}>12/10/2025</Text>
            </View>
          </View>
        </Card>
        <View style={styles.middleContainer}>
          <Text style={styles.numberOfInstrumentText}>
            {LANGUAGE.NumberOfInvestmentInstrument}
          </Text>
          <Card containerStyle={styles.skukuContainer}>
            <Text style={styles.numberSkuText}>{LANGUAGE.NumberOfSkuku}</Text>
          </Card>
        </View>
      </>
    );
  };
  const _renderItems = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.amountListText}>{item.amount}</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Image
            source={INVALID}
            style={styles.invalidIcon}
            resizeMode={'cover'}
          />
        </View>
      </View>
    );
  };
  return (
    <RootScreen contentContainerStyle={styles.mainContainer}>
      <View>
        <FlatList
          data={ListOfInvestments}
          renderItem={_renderItems}
          keyExtractor={item => item.id}
          ListHeaderComponent={_renderHeader}
          ListFooterComponent={_renderFooter}
        />
      </View>
    </RootScreen>
  );
};

export default InvestmentProductUI;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  image: {
    width: 13,
    height: 15,
    marginLeft: wp(2),
  },
  upwardIcon: {
    width: wp(5),
    height: wp(5),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginTop: hp(1),
  },
  headerRightTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  individualInvesterButtonContainer: {
    backgroundColor: COLORS.BLACK,
    borderRadius: 50,
  },
  indivialInvesterText: {
    color: COLORS.WHITE,
    padding: 5,
    fontSize: hp(2),
    fontWeight: 'bold',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
  },
  indivialDetailText: {
    color: COLORS.BLACK,
    padding: 5,
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  moneyContainer: {},
  investmentCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  investmentMainContainer: {
    marginHorizontal: wp(5),
    paddingVertical: hp(2),
    marginVertical: hp(3),
  },
  moneyText: {
    fontSize: hp(2),
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderWidth: 1,
    borderRadius: 50,
    borderColor: COLORS.BLACK,
  },
  instrumentText: {
    fontSize: hp(2.5),
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  fetchChapterText: {
    fontSize: hp(1.35),
    color: COLORS.GREY,
  },
  subSectionContainer: {
    flexDirection: 'row',
    paddingVertical: hp(1),
    marginLeft: 'auto',
  },
  urbanText: {
    backgroundColor: COLORS.PRIMARY_ALPHA,
    opacity: 0.5,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    borderRadius: 50,
    paddingHorizontal: wp(1),
    paddingVertical: hp(0.5),
    marginHorizontal: wp(1),
    fontSize: hp(1.2),
  },
  capitalText: {
    backgroundColor: COLORS.YELLOW,
    opacity: 0.2,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    borderRadius: 50,
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    marginHorizontal: wp(1),
    fontSize: hp(1.2),
  },
  sukukText: {
    backgroundColor: COLORS.LIGHT_GREY,
    opacity: 0.2,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    borderRadius: 50,
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    marginHorizontal: wp(1),
    fontSize: hp(1.2),
  },
  investmentDetailsContainer: {
    alignContent: 'flex-end',
  },
  amountText: {
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
    fontSize: hp(3),
    marginLeft: 'auto',
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentageText: {
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
    fontSize: hp(2),
    paddingHorizontal: wp(1),
  },
  percentageMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  sizeInvestmentText: {
    color: COLORS.BLACK,
    fontSize: hp(2),
  },
  dateMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dateSemiContainer: {
    borderRightWidth: 0.8,
    borderColor: COLORS.GREY,
    paddingHorizontal: wp(3),
    marginVertical: hp(2),
    paddingVertical: hp(1),
  },
  dateSemiContainer2: {
    paddingHorizontal: wp(3),
    marginVertical: hp(2),
    paddingVertical: hp(1),
  },
  dateTitleText: {
    color: COLORS.BLACK,
    fontSize: hp(1.8),
    fontWeight: 'bold',
  },
  middleContainer: {
    marginHorizontal: wp(5),
  },
  numberOfInstrumentText: {
    color: COLORS.PRIMARY,
    fontSize: hp(2.8),
    fontWeight: 'bold',
    marginHorizontal: wp(3),
  },
  skukuContainer: {
    borderWidth: 0.5,
    borderRadius: 8,
    marginHorizontal: wp(3),
    marginVertical: wp(2),
  },
  numberSkuText: {
    fontSize: hp(2),
    paddingVertical: hp(0.5),
    color: COLORS.BLACK,
  },
  amountListText: {
    color: COLORS.BLACK,
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  listContainer: {
    marginHorizontal: wp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: COLORS.LIGHT_MEDIUM_GREY,
    paddingVertical: hp(2),
  },
  nameContainer: {
    flexDirection: 'row',
  },
  invalidIcon: {
    width: wp(4.5),
    height: wp(4.5),
  },
  nameText: {
    marginRight: wp(2),
    fontSize: hp(2),
  },
});
