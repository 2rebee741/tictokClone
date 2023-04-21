import 'package:flutter/material.dart';
import 'package:tictokclone/features/videos/widgets/video_post.dart';

class VideoTimelineScreen extends StatefulWidget {
  const VideoTimelineScreen({super.key});

  @override
  State<VideoTimelineScreen> createState() => _VideoTimelineScreenState();
}

int _itemCount = 4;

final PageController _pageController = PageController();

const Duration _scrollDuration = Duration(microseconds: 250);
const Curve _scrollCurve = Curves.linear;

class _VideoTimelineScreenState extends State<VideoTimelineScreen> {
  void _onPageChanged(int page) {
    _pageController.animateToPage(
      page,
      duration: _scrollDuration,
      curve: _scrollCurve,
    );
    if (page == _itemCount - 1) {
      setState(() {});
    }
  }

  void _onVideoFinished() {
    _pageController.nextPage(
      duration: _scrollDuration,
      curve: _scrollCurve,
    );
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return PageView.builder(
      controller: _pageController,
      scrollDirection: Axis.vertical,
      onPageChanged: _onPageChanged,
      itemCount: 4,
      itemBuilder: (context, index) => VideoPost(
        onVideoFinished: _onVideoFinished,
        index: index,
      ),
    );
  }
}
