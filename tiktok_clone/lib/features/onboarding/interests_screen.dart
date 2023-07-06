import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:tictokclone/constants/gaps.dart';
import 'package:tictokclone/constants/sizes.dart';
import 'package:tictokclone/features/onboarding/widgets/interest_button.dart';
import 'package:tictokclone/features/onboarding/widgets/tutorial_screen.dart';

class InterestsScreen extends StatefulWidget {
  static const String routeName = "interests";
  static const String routeURL = "/tutorial";

  const InterestsScreen({super.key});

  static const interests = [
    "Daily Life",
    "Comedy",
    "Entertainment",
    "Animals",
    "Food",
    "Beauty & Style",
    "Drama",
    "Learning",
    "Talent",
    "Sports",
    "Auto",
    "Family",
    "Fitness & Health",
    "DIY & Life Hacks",
    "Arts & Crafts",
    "Dance",
    "Outdoors",
    "Oddly Satisfying",
    "Home & Garden",
    "Daily Life",
    "Comedy",
    "Entertainment",
    "Animals",
    "Food",
    "Beauty & Style",
    "Drama",
    "Learning",
    "Talent",
    "Sports",
    "Auto",
    "Family",
    "Fitness & Health",
    "DIY & Life Hacks",
    "Arts & Crafts",
    "Dance",
    "Outdoors",
    "Oddly Satisfying",
    "Home & Garden",
  ];

  @override
  State<InterestsScreen> createState() => _InterestsScreenState();
}

class _InterestsScreenState extends State<InterestsScreen> {
  final ScrollController _scollController = ScrollController();

  bool _showtitle = false;

  void _onScroll() {
    if (_scollController.offset > 100) {
      if (_showtitle) return;
      setState(() {
        _showtitle = true;
      });
    } else {
      setState(() {
        _showtitle = false;
      });
    }
  }

  void _onNextTap() {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const TutorialScreen(),
      ),
    );
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _scollController.addListener(_onScroll);
  }

  @override
  void dispose() {
    _scollController.dispose(); // TODO: implement dispose
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: AnimatedOpacity(
          opacity: _showtitle ? 1 : 0,
          duration: const Duration(milliseconds: 100),
          child: const Text('Choose your interests'),
        ),
      ),
      body: Scrollbar(
        controller: _scollController,
        child: SingleChildScrollView(
          controller: _scollController,
          child: Padding(
            padding: const EdgeInsets.only(
              bottom: Sizes.size16,
              left: Sizes.size24,
              right: Sizes.size24,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Gaps.v24,
                const Text(
                  'Choose your interests',
                  style: TextStyle(
                    fontSize: Sizes.size40,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Gaps.v20,
                const Text(
                  'Get better video recommandations',
                  style: TextStyle(
                    fontSize: Sizes.size20,
                    fontWeight: FontWeight.w400,
                  ),
                ),
                Gaps.v64,
                Wrap(
                  runSpacing: Sizes.size6,
                  spacing: Sizes.size6,
                  children: [
                    for (var interest in InterestsScreen.interests)
                      InterestButton(interest: interest)
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        elevation: 2,
        child: Padding(
          padding: const EdgeInsets.only(
            bottom: Sizes.size40,
            top: Sizes.size16,
            left: Sizes.size24,
            right: Sizes.size24,
          ),
          child: CupertinoButton(
            onPressed: _onNextTap,
            color: Theme.of(context).primaryColor,
            child: const Text('Next'),
          ),
        ),
      ),
    );
  }
}
