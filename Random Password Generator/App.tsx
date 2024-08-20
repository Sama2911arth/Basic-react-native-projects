import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = Yup.object({
  passwordLength: Yup.number()
    .required("Length is required")
    .min(4, "Should be min of 4 characters")
    .max(16, "Should be max of 16 characters")
})



export default function App() {

  const [password, setPassword] = useState("");
  const [isPassGenerated, setisPassGenerated] = useState(false);
  const [lowerCase, setlowerCase] = useState(false);
  const [upperCase, setupperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";
    const small = "abcdefghijklmnopqrstuvwxyz";
    const large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const special = "!@#$%^&*()_+|*.,";

    if (lowerCase) {
      characterList += small;
    }
    if (upperCase) {
      characterList += large;
    }
    if (numbers) {
      characterList += num;
    }
    if (symbols) {
      characterList += special;
    }
    const passwordresult = createPassword(passwordLength, characterList);
    setPassword(passwordresult);
    setisPassGenerated(true);
  }


  const createPassword = (passwordLength: number, characters: string) => {
    let result = "";
    for (var i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword("")
    setisPassGenerated(false)
    setlowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={
              values => {
                console.log(values);
                generatePasswordString(Number(values.passwordLength))
              }
            }
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              isValid,
              handleSubmit,
              handleReset
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length </Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )

                    }

                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange("passwordLength")}
                    placeholder='Ex. 8'
                    keyboardType='numeric'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase:  </Text>
                  <BouncyCheckbox
                    isChecked={false}
                    onPress={() => setlowerCase(!lowerCase)}
                    fillColor="#29AB87"

                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase:  </Text>
                  <BouncyCheckbox
                    isChecked={false}
                    onPress={() => setupperCase(!upperCase)}
                    fillColor="#E44236"

                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers :   </Text>
                  <BouncyCheckbox
                    isChecked={false}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#74B9FF"

                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols:     </Text>
                  <BouncyCheckbox
                    isChecked={false}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#F3B431"

                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    style={styles.primaryBtn}
                    disabled={!isValid}
                    onPress={handleSubmit}
                  ><Text style={styles.primaryBtnTxt}>Generate Password</Text></TouchableOpacity>

                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();

                    }}
                  ><Text style={styles.secondaryBtnTxt}>Reset</Text></TouchableOpacity>
                </View>
              </>
            )}
          </Formik>




        </View>
        {isPassGenerated ?
          (<View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to Copy</Text>
            <Text selectable style={styles.generatedPassword}>{password}</Text>
          </View>) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2'
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    color: "#000000"
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000'
  },

})