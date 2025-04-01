import { Image, StyleSheet, TouchableOpacity } from 'react-native';

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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Witaj w HabitHero!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Krok 1: Dodaj zadanie lub nawyk</ThemedText>
        <ThemedText>
          Kliknij w ikonkę <ThemedText type="defaultSemiBold">Zadanie</ThemedText>, aby śledzić swoje postępy w poszczególnych zadaniach, lub <ThemedText type="defaultSemiBold">Task</ThemedText>, aby zapanować nad swoimi nawykami.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Krok 2: Monitoruj swoje postępy</ThemedText>
        <ThemedText>
           Kliknij w ikonkę <ThemedText type="defaultSemiBold">Kalendarz</ThemedText>, aby śledzić swój postęp w szerszej perspektywie; lub w ikonkę <ThemedText type="defaultSemiBold">Znajomi</ThemedText> aby sprawdzić postępy twoich bliskich we wspólnych zadaniach HabitHero.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Krok 3: Zacznij już teraz!</ThemedText>
        <ThemedText>
          Nie czekaj, tylko rozwijaj się już tu i teraz.
        </ThemedText>
      </ThemedView>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.buttonText}>
          Przejdź do logowania
        </ThemedText>
      </TouchableOpacity>
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
    height: 122.4,
    width: 144,
    bottom: '10%',
    left: '10%',
    position: 'absolute',
  },
  button: {
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#14A341',
    borderRadius: 24,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
  }
});
