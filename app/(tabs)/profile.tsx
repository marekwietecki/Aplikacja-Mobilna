import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
      }>
      <ThemedView style={styles.profileWrapper}>
        <ThemedView style={styles.profileCircle}>

        </ThemedView>
        <ThemedText style={styles.profileName}>
          Nazwa użytkownika
        </ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: 0,
    width: 0,
    bottom: '10%',
    left: '10%',
    position: 'absolute',
  },
  profileWrapper: {
    flexDirection: 'row',
  },
  profileCircle: {
    borderRadius: 100,
    backgroundColor: 'white',
    width: 120,
    height: 120,
    marginRight: 32,
  },
  profileName: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
