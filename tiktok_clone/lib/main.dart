import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:tictokclone/constants/sizes.dart';
import 'package:tictokclone/features/authentication/sign_up_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized(); //앱고정

  await SystemChrome.setPreferredOrientations(
      [DeviceOrientation.portraitUp]); //앱고정

  SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.dark);

  runApp(const TicTokApp());
}

class TicTokApp extends StatelessWidget {
  const TicTokApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'TikTok Clone App',
      themeMode: ThemeMode.system,
      theme: ThemeData(
        textTheme: Typography.blackMountainView,
        brightness: Brightness.light,
        bottomAppBarTheme: BottomAppBarTheme(
          color: Colors.grey.shade50,
        ),
        scaffoldBackgroundColor: Colors.white,
        primaryColor: const Color(0xffe9435A),
        splashColor: Colors.transparent,
        highlightColor: Colors.transparent,
        appBarTheme: const AppBarTheme(
          foregroundColor: Colors.black,
          backgroundColor: Colors.white,
          elevation: 0,
          titleTextStyle: TextStyle(
            color: Colors.black,
            fontSize: Sizes.size16 + Sizes.size2,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
      darkTheme: ThemeData(
        textTheme: Typography.whiteMountainView,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: Colors.black,
        appBarTheme: AppBarTheme(
          backgroundColor: Colors.grey.shade900,
        ),
        bottomAppBarTheme: BottomAppBarTheme(
          color: Colors.grey.shade900,
        ),
        primaryColor: const Color(0xffe9435A),
      ),
      home: const SignUpScreen(),
      // home: const InterestsScreen(),
      // home: const MainNavigationScreen(),
      // home: const DiscoverScreen(),
    );
  }
}
