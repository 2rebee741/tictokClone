import 'package:flutter/material.dart';
import 'package:tictokclone/features/authentication/sign_up_screen.dart';

void main() {
  runApp(const TicTokApp());
}

class TicTokApp extends StatelessWidget {
  const TicTokApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'TikTok Clone App',
      theme: ThemeData(primaryColor: const Color(0xffe9435A)),
      home: const SignUpScreen(),
    );
  }
}
