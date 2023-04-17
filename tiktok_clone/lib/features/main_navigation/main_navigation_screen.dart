import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class MainNavigationScreen extends StatefulWidget {
  const MainNavigationScreen({super.key});

  @override
  State<MainNavigationScreen> createState() => _MainNavigationScreenState();
}

class _MainNavigationScreenState extends State<MainNavigationScreen> {
  int _selectIndex = 0;

  final screens = [
    const Center(
      child: Text('Home'),
    ),
    const Center(
      child: Text('Search'),
    ),
    const Center(
      child: Text('3'),
    ),
    const Center(
      child: Text('4'),
    ),
    const Center(
      child: Text('5'),
    ),
  ];

  void _onTap(int index) {
    setState(() {
      _selectIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: screens[_selectIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: _onTap,
        currentIndex: _selectIndex,
        selectedItemColor: Theme.of(context).primaryColor,
        items: const [
          BottomNavigationBarItem(
              backgroundColor: Colors.amber,
              icon: FaIcon(
                FontAwesomeIcons.house,
              ),
              label: "home",
              tooltip: "what are you"),
          BottomNavigationBarItem(
              backgroundColor: Colors.blue,
              icon: FaIcon(
                FontAwesomeIcons.magnifyingGlass,
              ),
              label: "Search",
              tooltip: "what are you"),
          BottomNavigationBarItem(
              backgroundColor: Colors.pink,
              icon: FaIcon(
                FontAwesomeIcons.house,
              ),
              label: "home",
              tooltip: "what are you"),
          BottomNavigationBarItem(
              backgroundColor: Colors.yellow,
              icon: FaIcon(
                FontAwesomeIcons.house,
              ),
              label: "home",
              tooltip: "what are you"),
          BottomNavigationBarItem(
              backgroundColor: Colors.teal,
              icon: FaIcon(
                FontAwesomeIcons.house,
              ),
              label: "home",
              tooltip: "what are you"),
        ],
      ),
    );
  }
}
